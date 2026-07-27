/* ==========================================================================
   LUMEN SYSTEM - SCRIPT INSTITUCIONAL & ADMIN
   ========================================================================== */

const DEFAULT_STATE = {
    settings: {
        waNumber: "24992584133",
        email: "contato@lumensystem.com.br",
        heroTitle: "Sites profissionais para o seu negócio, sem pagar tudo de uma vez.",
        heroSubtitle: "Criamos e cuidamos do site da sua empresa por uma mensalidade acessível — hospedagem, suporte e atualizações inclusos.",
        heroImage: "assets/logo_lumen_system.jpg"
    },
    plans: {
        plan1: { setup: "350,00", monthly: "89,00" },
        plan2: { setup: "650,00", monthly: "149,00" },
        plan3: { setup: "1.200,00", monthly: "249,00" }
    }
};

let appState = loadState();
let isAdminLoggedIn = false;

function loadState() {
    const saved = localStorage.getItem('lumen_inst_state');
    if (saved) {
        try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
    localStorage.setItem('lumen_inst_state', JSON.stringify(appState));
    renderApp();
}

function formatPhone(numStr) {
    const cleaned = ('' + numStr).replace(/\D/g, '');
    if (cleaned.length === 11) {
        return `(${cleaned.substring(0,2)}) ${cleaned.substring(2,7)}-${cleaned.substring(7)}`;
    }
    return numStr;
}

function getWaLink(customMessage = "") {
    const cleanNum = appState.settings.waNumber.replace(/\D/g, '');
    const numWithCountry = cleanNum.startsWith('55') ? cleanNum : `55${cleanNum}`;
    const text = customMessage ? encodeURIComponent(customMessage) : encodeURIComponent("Olá! Vim pelo site da Lumen System.");
    return `https://wa.me/${numWithCountry}?text=${text}`;
}

function showToast(msg, type = "info") {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-cyan"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function renderApp() {
    const { settings, plans } = appState;
    const formattedPhone = formatPhone(settings.waNumber);

    // Displays
    document.getElementById('headerWaDisplay').textContent = "Contato";
    document.getElementById('contactWaDisplay').textContent = formattedPhone;
    document.getElementById('contactWaLink').href = getWaLink();
    document.getElementById('contactEmailDisplay').textContent = settings.email;
    document.getElementById('footerWaDisplay').textContent = formattedPhone;
    document.getElementById('footerEmailDisplay').textContent = settings.email;
    document.getElementById('floatWaBtn').href = getWaLink();

    // Hero
    document.getElementById('heroTitle').innerHTML = settings.heroTitle.includes('span') 
        ? settings.heroTitle 
        : settings.heroTitle.replace(/sem pagar tudo de uma vez/gi, '<span class="gradient-text">sem pagar tudo de uma vez</span>');
    document.getElementById('heroSubtitle').textContent = settings.heroSubtitle;

    // Plans Prices
    if (plans) {
        const planCards = document.querySelectorAll('.plan-card');
        if (planCards.length >= 3) {
            planCards[0].querySelector('.setup-price').textContent = `Setup de Implantação: R$ ${plans.plan1.setup}`;
            planCards[0].querySelector('.monthly-price').innerHTML = `R$ ${plans.plan1.monthly.split(',')[0]}<span class="period">/mês</span>`;

            planCards[1].querySelector('.setup-price').textContent = `Setup de Implantação: R$ ${plans.plan2.setup}`;
            planCards[1].querySelector('.monthly-price').innerHTML = `R$ ${plans.plan2.monthly.split(',')[0]}<span class="period">/mês</span>`;

            planCards[2].querySelector('.setup-price').textContent = `Setup de Implantação: R$ ${plans.plan3.setup}`;
            planCards[2].querySelector('.monthly-price').innerHTML = `R$ ${plans.plan3.monthly.split(',')[0]}<span class="period">/mês</span>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderApp();

    // Header Scroll Effect
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // Accordion Toggle for FAQ
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            accordionItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const business = document.getElementById('contactBusiness').value;
        const phone = document.getElementById('contactPhone').value;
        const email = document.getElementById('contactEmail').value;
        const msg = document.getElementById('contactMessage').value;

        showToast("Mensagem formatada! Redirecionando para o WhatsApp...", "success");

        let waText = `Olá! Meu nome é *${name}* da empresa *${business}*.\n`;
        waText += `Telefone: ${phone} | E-mail: ${email || 'Não informado'}\n\n`;
        waText += `Mensagem: ${msg || 'Gostaria de solicitar um orçamento para site por assinatura.'}`;

        setTimeout(() => {
            window.open(getWaLink(waText), '_blank');
            contactForm.reset();
        }, 1200);
    });

    // Admin Modal Handling
    const adminModalBackdrop = document.getElementById('adminModalBackdrop');
    const openAdminBtn = document.getElementById('openAdminBtn');
    const floatAdminBtn = document.getElementById('floatAdminBtn');
    const footerAdminLink = document.getElementById('footerAdminLink');
    const closeAdminModalBtn = document.getElementById('closeAdminModalBtn');

    function openAdminModal() { adminModalBackdrop.classList.add('active'); }
    function closeAdminModal() { adminModalBackdrop.classList.remove('active'); }

    openAdminBtn.addEventListener('click', openAdminModal);
    floatAdminBtn.addEventListener('click', openAdminModal);
    footerAdminLink.addEventListener('click', openAdminModal);
    closeAdminModalBtn.addEventListener('click', closeAdminModal);

    // Admin Login Form
    const adminLoginForm = document.getElementById('adminLoginForm');
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const u = document.getElementById('adminUser').value.trim();
        const p = document.getElementById('adminPass').value.trim();

        if (u === "admin" && p === "lumen123") {
            isAdminLoggedIn = true;
            document.getElementById('adminLoginView').classList.add('hidden');
            document.getElementById('adminDashboardView').classList.remove('hidden');
            populateAdminForms();
            showToast("Login no Painel Admin realizado com sucesso!", "success");
        } else {
            showToast("Usuário ou senha incorretos!", "error");
        }
    });

    // Tab Switching inside Admin
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(tBtn => {
        tBtn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tBtn.classList.add('active');
            document.getElementById(tBtn.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Save General Settings
    document.getElementById('generalSettingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        appState.settings.waNumber = document.getElementById('settingWaNumber').value.trim();
        appState.settings.email = document.getElementById('settingEmail').value.trim();
        appState.settings.heroTitle = document.getElementById('settingHeroTitle').value.trim();
        appState.settings.heroSubtitle = document.getElementById('settingHeroSubtitle').value.trim();

        saveState();
        showToast("Dados da empresa salvos com sucesso!", "success");
    });

    // Save Plans Prices Settings
    document.getElementById('plansSettingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        appState.plans.plan1.setup = document.getElementById('plan1Setup').value.trim();
        appState.plans.plan1.monthly = document.getElementById('plan1Monthly').value.trim();

        appState.plans.plan2.setup = document.getElementById('plan2Setup').value.trim();
        appState.plans.plan2.monthly = document.getElementById('plan2Monthly').value.trim();

        appState.plans.plan3.setup = document.getElementById('plan3Setup').value.trim();
        appState.plans.plan3.monthly = document.getElementById('plan3Monthly').value.trim();

        saveState();
        showToast("Valores dos planos atualizados com sucesso!", "success");
    });
});

function populateAdminForms() {
    document.getElementById('settingWaNumber').value = appState.settings.waNumber;
    document.getElementById('settingEmail').value = appState.settings.email;
    document.getElementById('settingHeroTitle').value = appState.settings.heroTitle;
    document.getElementById('settingHeroSubtitle').value = appState.settings.heroSubtitle;

    if (appState.plans) {
        document.getElementById('plan1Setup').value = appState.plans.plan1.setup;
        document.getElementById('plan1Monthly').value = appState.plans.plan1.monthly;
        document.getElementById('plan2Setup').value = appState.plans.plan2.setup;
        document.getElementById('plan2Monthly').value = appState.plans.plan2.monthly;
        document.getElementById('plan3Setup').value = appState.plans.plan3.setup;
        document.getElementById('plan3Monthly').value = appState.plans.plan3.monthly;
    }
}
