/* ==========================================================================
   LUMEN SYSTEM - CORE INSTITUTIONAL & COMPREHENSIVE ADMIN SCRIPT
   ========================================================================== */

const DEFAULT_STATE = {
    settings: {
        brandName: "LUMEN SYSTEM",
        brandSlogan: "CLAREZA GERA RESULTADOS",
        waNumber: "24992584133",
        email: "contato@lumensystem.com.br",
        heroBadge: "Sites Profissionais por Assinatura",
        heroTitle: "Sites profissionais para o seu negócio, sem pagar tudo de uma vez.",
        heroSubtitle: "Criamos e cuidamos do site da sua empresa por uma mensalidade acessível — hospedagem, suporte e atualizações inclusos.",
        logoImage: "assets/logo_lumen_system.jpg",
        heroImage: "assets/logo_lumen_system.jpg",
        aboutImage: "assets/logo_lumen_system.jpg"
    },
    colors: {
        cyan: "#00f0ff",
        violet: "#7000ff",
        magenta: "#ff007f",
        bgDark: "#090c15"
    },
    plans: {
        plan1: { name: "Plano Essencial", setup: "350,00", monthly: "89,00" },
        plan2: { name: "Plano Profissional", setup: "650,00", monthly: "149,00" },
        plan3: { name: "Loja Virtual / Sistema", setup: "1.200,00", monthly: "249,00" }
    },
    portfolioCases: [
        {
            id: 1,
            title: "Cantinho do Sabor",
            tag: "Cliente Principal",
            subtag: "Gastronomia & Delivery",
            url: "https://cantinhodosaborvr.com.br",
            image: "assets/cantinho_do_sabor.png",
            desc: "Cardápio digital e plataforma de pedidos sob medida desenvolvida com foco em exibição dos pratos e alta velocidade no envio de pedidos pelo WhatsApp.",
            isFeatured: true
        },
        {
            id: 2,
            title: "Studio Márcia Araújo",
            tag: "Estética & Beleza",
            subtag: "Estética & Saúde",
            url: "https://studiomaharaujo.vercel.app/",
            image: "assets/studio_marcia_araujo.png",
            desc: "Site profissional desenvolvido para exibição de tratamentos estéticos, agendamento de horários e atendimento rápido via WhatsApp.",
            isFeatured: false
        },
        {
            id: 3,
            title: "Perfecto Confecções",
            tag: "Varejo & Moda",
            subtag: "Catálogo & Vendas",
            url: "https://perfectoconfeccoes.vercel.app/",
            image: "assets/lumen_digital_catalog_1785183697092.png",
            desc: "Plataforma de catálogo digital de peças com painel administrativo para atualização de estoque e envio direto de pedidos para o WhatsApp.",
            isFeatured: false
        }
    ]
};

let appState = loadState();
let isAdminLoggedIn = false;

// Uploaded base64 temporary buffers
let tempImages = {
    logo: null,
    hero: null,
    about: null,
    case: null
};

function loadState() {
    const saved = localStorage.getItem('lumen_full_admin_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            return {
                ...DEFAULT_STATE,
                ...parsed,
                settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) },
                colors: { ...DEFAULT_STATE.colors, ...(parsed.colors || {}) },
                plans: { ...DEFAULT_STATE.plans, ...(parsed.plans || {}) },
                portfolioCases: parsed.portfolioCases || DEFAULT_STATE.portfolioCases
            };
        } catch (e) {
            console.error("Erro ao carregar estado do localStorage:", e);
        }
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
    localStorage.setItem('lumen_full_admin_state', JSON.stringify(appState));
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
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-cyan"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

// Apply Dynamic CSS Colors Palette
function applyThemeColors() {
    const { colors } = appState;
    if (!colors) return;

    const root = document.documentElement;
    if (colors.cyan) root.style.setProperty('--primary-cyan', colors.cyan);
    if (colors.violet) root.style.setProperty('--primary-violet', colors.violet);
    if (colors.magenta) root.style.setProperty('--primary-magenta', colors.magenta);
    if (colors.bgDark) root.style.setProperty('--bg-dark', colors.bgDark);

    const glow1 = document.getElementById('bgGlow1');
    const glow2 = document.getElementById('bgGlow2');
    if (glow1) glow1.style.background = colors.cyan;
    if (glow2) glow2.style.background = colors.violet;
}

// Main Render Function
function renderApp() {
    applyThemeColors();

    const { settings, plans, portfolioCases } = appState;
    const formattedPhone = formatPhone(settings.waNumber);

    // Brand Name & Slogan
    if (document.getElementById('siteBrandName')) document.getElementById('siteBrandName').textContent = settings.brandName || "LUMEN SYSTEM";
    if (document.getElementById('siteBrandSlogan')) document.getElementById('siteBrandSlogan').textContent = settings.brandSlogan || "CLAREZA GERA RESULTADOS";
    if (document.getElementById('siteFooterBrandName')) document.getElementById('siteFooterBrandName').textContent = settings.brandName || "LUMEN SYSTEM";
    if (document.getElementById('siteFooterBrandSlogan')) document.getElementById('siteFooterBrandSlogan').textContent = settings.brandSlogan || "CLAREZA GERA RESULTADOS";

    // Images
    if (settings.logoImage && document.getElementById('siteBrandLogo')) {
        document.getElementById('siteBrandLogo').src = settings.logoImage;
    }
    if (settings.logoImage && document.getElementById('siteFooterLogo')) {
        document.getElementById('siteFooterLogo').src = settings.logoImage;
    }
    if (settings.heroImage && document.getElementById('heroMainImage')) {
        document.getElementById('heroMainImage').src = settings.heroImage;
    }
    if (settings.aboutImage && document.getElementById('siteAboutImage')) {
        document.getElementById('siteAboutImage').src = settings.aboutImage;
    }

    // Displays
    if (document.getElementById('headerWaDisplay')) document.getElementById('headerWaDisplay').textContent = "Contato";
    if (document.getElementById('contactWaDisplay')) document.getElementById('contactWaDisplay').textContent = formattedPhone;
    if (document.getElementById('contactWaLink')) document.getElementById('contactWaLink').href = getWaLink();
    if (document.getElementById('contactEmailDisplay')) document.getElementById('contactEmailDisplay').textContent = settings.email;
    if (document.getElementById('footerWaDisplay')) document.getElementById('footerWaDisplay').textContent = formattedPhone;
    if (document.getElementById('footerEmailDisplay')) document.getElementById('footerEmailDisplay').textContent = settings.email;
    if (document.getElementById('floatWaBtn')) document.getElementById('floatWaBtn').href = getWaLink();

    // Hero Texts
    if (document.getElementById('heroTitle')) {
        document.getElementById('heroTitle').innerHTML = settings.heroTitle.includes('span') 
            ? settings.heroTitle 
            : settings.heroTitle.replace(/sem pagar tudo de uma vez/gi, '<span class="gradient-text">sem pagar tudo de uma vez</span>');
    }
    if (document.getElementById('heroSubtitle')) {
        document.getElementById('heroSubtitle').textContent = settings.heroSubtitle;
    }

    // Plans Render
    renderPlansGrid();

    // Portfolio Render
    renderPortfolioGrid();

    if (isAdminLoggedIn) {
        renderAdminCasesList();
    }
}

// Render Plans Cards
function renderPlansGrid() {
    const plansGrid = document.getElementById('plansGrid');
    if (!plansGrid) return;

    const { plans } = appState;
    plansGrid.innerHTML = `
        <!-- Plano 1 -->
        <div class="plan-card">
            <div class="plan-header">
                <span class="plan-badge">Para Autônomos e Iniciantes</span>
                <h3 class="plan-name">${plans.plan1.name}</h3>
                <p class="plan-target">Ideal para validar seu negócio na internet rapidamente.</p>
                <div class="plan-price-box">
                    <span class="setup-price">Setup de Implantação: R$ ${plans.plan1.setup}</span>
                    <div class="monthly-price">R$ ${plans.plan1.monthly.split(',')[0]}<span class="period">/mês</span></div>
                </div>
            </div>
            <div class="plan-body">
                <ul class="plan-features">
                    <li><i class="fa-solid fa-circle-check"></i> Landing Page de 1 Página</li>
                    <li><i class="fa-solid fa-circle-check"></i> Design 100% Responsivo (Mobile/PC)</li>
                    <li><i class="fa-solid fa-circle-check"></i> Hospedagem + Domínio (.com.br) inclusos</li>
                    <li><i class="fa-solid fa-circle-check"></i> Botão Direto para WhatsApp</li>
                    <li><i class="fa-solid fa-circle-check"></i> Suporte Técnico e Atualizações</li>
                    <li><i class="fa-solid fa-circle-check"></i> Certificado de Segurança SSL</li>
                </ul>
                <a href="${getWaLink('Olá! Quero contratar o ' + plans.plan1.name)}" target="_blank" class="btn btn-glass btn-full">
                    Escolher ${plans.plan1.name}
                </a>
            </div>
        </div>

        <!-- Plano 2 (Featured) -->
        <div class="plan-card featured">
            <div class="featured-ribbon">MAIS POPULAR</div>
            <div class="plan-header">
                <span class="plan-badge">Para Empresas em Crescimento</span>
                <h3 class="plan-name">${plans.plan2.name}</h3>
                <p class="plan-target">Site completo com múltiplas páginas e catálogo.</p>
                <div class="plan-price-box">
                    <span class="setup-price">Setup de Implantação: R$ ${plans.plan2.setup}</span>
                    <div class="monthly-price">R$ ${plans.plan2.monthly.split(',')[0]}<span class="period">/mês</span></div>
                </div>
            </div>
            <div class="plan-body">
                <ul class="plan-features">
                    <li><i class="fa-solid fa-circle-check"></i> Site Multi-páginas (Até 5 Páginas)</li>
                    <li><i class="fa-solid fa-circle-check"></i> Catálogo de Produtos / Serviços</li>
                    <li><i class="fa-solid fa-circle-check"></i> <strong>Painel Admin Exclusivo</strong> para editar dados e fotos</li>
                    <li><i class="fa-solid fa-circle-check"></i> Hospedagem + Domínio (.com.br) inclusos</li>
                    <li><i class="fa-solid fa-circle-check"></i> Otimização SEO para o Google</li>
                    <li><i class="fa-solid fa-circle-check"></i> Suporte VIP via WhatsApp</li>
                </ul>
                <a href="${getWaLink('Olá! Quero contratar o ' + plans.plan2.name)}" target="_blank" class="btn btn-primary btn-full">
                    Escolher ${plans.plan2.name}
                </a>
            </div>
        </div>

        <!-- Plano 3 -->
        <div class="plan-card">
            <div class="plan-header">
                <span class="plan-badge">Catálogo Completo & Vendas</span>
                <h3 class="plan-name">${plans.plan3.name}</h3>
                <p class="plan-target">Para quem precisa de catálogo avançado ou pedidos online.</p>
                <div class="plan-price-box">
                    <span class="setup-price">Setup de Implantação: R$ ${plans.plan3.setup}</span>
                    <div class="monthly-price">R$ ${plans.plan3.monthly.split(',')[0]}<span class="period">/mês</span></div>
                </div>
            </div>
            <div class="plan-body">
                <ul class="plan-features">
                    <li><i class="fa-solid fa-circle-check"></i> Catálogo Ilimitado de Produtos</li>
                    <li><i class="fa-solid fa-circle-check"></i> Sistema de Pedidos para WhatsApp</li>
                    <li><i class="fa-solid fa-circle-check"></i> Painel de Gestão Avançado</li>
                    <li><i class="fa-solid fa-circle-check"></i> Banco de Dados e Estatísticas</li>
                    <li><i class="fa-solid fa-circle-check"></i> Hospedagem de Alta Velocidade + Domínio</li>
                    <li><i class="fa-solid fa-circle-check"></i> Suporte Prioritário 24/7</li>
                </ul>
                <a href="${getWaLink('Olá! Quero contratar o ' + plans.plan3.name)}" target="_blank" class="btn btn-glass btn-full">
                    Escolher ${plans.plan3.name}
                </a>
            </div>
        </div>
    `;
}

// Render Portfolio Cases Grid
function renderPortfolioGrid() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    grid.innerHTML = '';
    const cases = appState.portfolioCases || [];

    const sortedCases = [...cases].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

    sortedCases.forEach(item => {
        const card = document.createElement('div');
        card.className = `portfolio-card ${item.isFeatured ? 'featured-case' : ''}`;

        const badgeHtml = item.isFeatured 
            ? `<span class="portfolio-tag main-client-tag"><i class="fa-solid fa-star"></i> ${item.tag || 'Cliente Principal'}</span>`
            : `<span class="portfolio-tag">${item.tag || 'Case'}</span>`;

        card.innerHTML = `
            <div class="portfolio-img-wrap">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/logo_lumen_system.jpg'">
                ${badgeHtml}
            </div>
            <div class="portfolio-body">
                <div class="case-header-flex">
                    <h3>${item.title}</h3>
                    <span class="case-subtag">${item.subtag || ''}</span>
                </div>
                <p class="portfolio-desc">"${item.desc}"</p>
                <a href="${item.url}" target="_blank" class="btn ${item.isFeatured ? 'btn-primary' : 'btn-outline'} btn-sm btn-full">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver Site ao Vivo (${item.title.toLowerCase().replace(/\s+/g, '')})
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderApp();

    // Auto open admin if hash #admin
    if (window.location.hash === '#admin') {
        const modal = document.getElementById('adminModalBackdrop');
        if (modal) modal.classList.add('active');
    }

    // Scroll Header effect
    const siteHeader = document.getElementById('siteHeader');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) siteHeader.classList.add('scrolled');
            else siteHeader.classList.remove('scrolled');
        });
    }

    // Accordion Toggle
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                accordionItems.forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        }
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
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
    }

    // Modal Triggers
    const adminModalBackdrop = document.getElementById('adminModalBackdrop');
    const openAdminBtn = document.getElementById('openAdminBtn');
    const floatAdminBtn = document.getElementById('floatAdminBtn');
    const footerAdminLink = document.getElementById('footerAdminLink');
    const closeAdminModalBtn = document.getElementById('closeAdminModalBtn');

    function openAdminModal() { if (adminModalBackdrop) adminModalBackdrop.classList.add('active'); }
    function closeAdminModal() { if (adminModalBackdrop) adminModalBackdrop.classList.remove('active'); }

    if (openAdminBtn) openAdminBtn.addEventListener('click', openAdminModal);
    if (floatAdminBtn) floatAdminBtn.addEventListener('click', openAdminModal);
    if (footerAdminLink) footerAdminLink.addEventListener('click', openAdminModal);
    if (closeAdminModalBtn) closeAdminModalBtn.addEventListener('click', closeAdminModal);

    // Login Form Authentication (SECURE CREDENTIALS: lumenadmin / Lumen123@)
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const u = document.getElementById('adminUser').value.trim();
            const p = document.getElementById('adminPass').value.trim();

            if (u === "lumenadmin" && p === "Lumen123@") {
                isAdminLoggedIn = true;
                document.getElementById('adminLoginView').classList.add('hidden');
                document.getElementById('adminDashboardView').classList.remove('hidden');
                populateAdminForms();
                renderAdminCasesList();
                showToast("Autenticado com Sucesso no Painel Admin!", "success");
            } else {
                showToast("Usuário ou senha de administrador incorretos!", "error");
            }
        });
    }

    // Admin Navigation Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(tBtn => {
        tBtn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tBtn.classList.add('active');
            const targetTab = document.getElementById(tBtn.getAttribute('data-tab'));
            if (targetTab) targetTab.classList.add('active');
        });
    });

    // Image Upload Inputs
    setupImageUploader('fileUploadLogo', 'urlInputLogo', 'previewAdminLogo', 'logo');
    setupImageUploader('fileUploadHero', 'urlInputHero', 'previewAdminHero', 'hero');
    setupImageUploader('fileUploadAbout', 'urlInputAbout', 'previewAdminAbout', 'about');

    const btnSaveImages = document.getElementById('btnSaveImages');
    if (btnSaveImages) {
        btnSaveImages.addEventListener('click', () => {
            const logoUrl = document.getElementById('urlInputLogo').value.trim();
            const heroUrl = document.getElementById('urlInputHero').value.trim();
            const aboutUrl = document.getElementById('urlInputAbout').value.trim();

            if (tempImages.logo) appState.settings.logoImage = tempImages.logo;
            else if (logoUrl) appState.settings.logoImage = logoUrl;

            if (tempImages.hero) appState.settings.heroImage = tempImages.hero;
            else if (heroUrl) appState.settings.heroImage = heroUrl;

            if (tempImages.about) appState.settings.aboutImage = tempImages.about;
            else if (aboutUrl) appState.settings.aboutImage = aboutUrl;

            saveState();
            showToast("Imagens e Logotipo atualizados com sucesso!", "success");
        });
    }

    // Color Pickers Handlers
    bindColorPicker('colorCyan', 'colorCyanText');
    bindColorPicker('colorViolet', 'colorVioletText');
    bindColorPicker('colorMagenta', 'colorMagentaText');
    bindColorPicker('colorBgDark', 'colorBgDarkText');

    const themeColorForm = document.getElementById('themeColorForm');
    if (themeColorForm) {
        themeColorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            appState.colors = {
                cyan: document.getElementById('colorCyan').value,
                violet: document.getElementById('colorViolet').value,
                magenta: document.getElementById('colorMagenta').value,
                bgDark: document.getElementById('colorBgDark').value
            };
            saveState();
            showToast("Paleta de cores aplicada e salva no site!", "success");
        });
    }

    const btnResetColors = document.getElementById('btnResetColors');
    if (btnResetColors) {
        btnResetColors.addEventListener('click', () => {
            appState.colors = { ...DEFAULT_STATE.colors };
            saveState();
            populateAdminForms();
            showToast("Paleta de cores restaurada para o padrão!", "info");
        });
    }

    // Portfolio Case Form Handlers
    const btnAddNewCase = document.getElementById('btnAddNewCase');
    const caseForm = document.getElementById('caseForm');
    const btnCancelCaseForm = document.getElementById('btnCancelCaseForm');

    if (btnAddNewCase) {
        btnAddNewCase.addEventListener('click', () => {
            caseForm.reset();
            tempImages.case = null;
            document.getElementById('caseEditId').value = "";
            document.getElementById('caseFormTitle').textContent = "Adicionar Novo Case no Portfólio";
            caseForm.classList.remove('hidden');
        });
    }

    if (btnCancelCaseForm) {
        btnCancelCaseForm.addEventListener('click', () => {
            caseForm.classList.add('hidden');
        });
    }

    const fileCaseImage = document.getElementById('fileCaseImage');
    if (fileCaseImage) {
        fileCaseImage.addEventListener('change', async (e) => {
            if (e.target.files && e.target.files[0]) {
                tempImages.case = await readFileAsDataURL(e.target.files[0]);
            }
        });
    }

    if (caseForm) {
        caseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const idVal = document.getElementById('caseEditId').value;
            const title = document.getElementById('caseTitle').value.trim();
            const tag = document.getElementById('caseTag').value.trim();
            const url = document.getElementById('caseUrl').value.trim();
            const imageUrlInput = document.getElementById('caseImageUrl').value.trim();
            const desc = document.getElementById('caseDesc').value.trim();
            const isFeatured = document.getElementById('caseIsFeatured').checked;

            const finalImage = tempImages.case || imageUrlInput || "assets/logo_lumen_system.jpg";

            if (idVal) {
                const idx = appState.portfolioCases.findIndex(c => c.id == idVal);
                if (idx !== -1) {
                    appState.portfolioCases[idx] = {
                        id: parseInt(idVal),
                        title,
                        tag: isFeatured ? "Cliente Principal" : tag,
                        subtag: tag,
                        url,
                        image: finalImage,
                        desc,
                        isFeatured
                    };
                    showToast("Case atualizado no portfólio!", "success");
                }
            } else {
                const newId = appState.portfolioCases.length ? Math.max(...appState.portfolioCases.map(c => c.id)) + 1 : 1;
                appState.portfolioCases.push({
                    id: newId,
                    title,
                    tag: isFeatured ? "Cliente Principal" : tag,
                    subtag: tag,
                    url,
                    image: finalImage,
                    desc,
                    isFeatured
                });
                showToast("Novo case adicionado ao portfólio!", "success");
            }

            saveState();
            caseForm.classList.add('hidden');
        });
    }

    // General Settings Save
    const generalSettingsForm = document.getElementById('generalSettingsForm');
    if (generalSettingsForm) {
        generalSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            appState.settings.brandName = document.getElementById('settingBrandName').value.trim();
            appState.settings.brandSlogan = document.getElementById('settingBrandSlogan').value.trim();
            appState.settings.waNumber = document.getElementById('settingWaNumber').value.trim();
            appState.settings.email = document.getElementById('settingEmail').value.trim();
            appState.settings.heroTitle = document.getElementById('settingHeroTitle').value.trim();
            appState.settings.heroSubtitle = document.getElementById('settingHeroSubtitle').value.trim();

            saveState();
            showToast("Informações da empresa salvas com sucesso!", "success");
        });
    }

    // Reset Factory
    const btnResetToDefaults = document.getElementById('btnResetToDefaults');
    if (btnResetToDefaults) {
        btnResetToDefaults.addEventListener('click', () => {
            if (confirm("Deseja realmente restaurar todos os dados, fotos, cores e planos para os padrões de fábrica?")) {
                localStorage.removeItem('lumen_full_admin_state');
                appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
                saveState();
                populateAdminForms();
                showToast("Todos os dados foram resetados para os padrões originais!", "info");
            }
        });
    }
});

function setupImageUploader(fileInputId, urlInputId, previewImgId, key) {
    const fileInput = document.getElementById(fileInputId);
    const urlInput = document.getElementById(urlInputId);
    const previewImg = document.getElementById(previewImgId);

    if (fileInput) {
        fileInput.addEventListener('change', async (e) => {
            if (e.target.files && e.target.files[0]) {
                const base64 = await readFileAsDataURL(e.target.files[0]);
                tempImages[key] = base64;
                if (previewImg) previewImg.src = base64;
                showToast("Imagem selecionada (Pronta para salvar)!", "info");
            }
        });
    }

    if (urlInput) {
        urlInput.addEventListener('input', (e) => {
            if (e.target.value) {
                if (previewImg) previewImg.src = e.target.value;
                tempImages[key] = null;
            }
        });
    }
}

function bindColorPicker(pickerId, textId) {
    const picker = document.getElementById(pickerId);
    const text = document.getElementById(textId);

    if (picker && text) {
        picker.addEventListener('input', (e) => {
            text.value = e.target.value;
        });
    }
}

function populateAdminForms() {
    const { settings, colors, plans } = appState;

    if (document.getElementById('previewAdminLogo')) document.getElementById('previewAdminLogo').src = settings.logoImage;
    if (document.getElementById('previewAdminHero')) document.getElementById('previewAdminHero').src = settings.heroImage;
    if (document.getElementById('previewAdminAbout')) document.getElementById('previewAdminAbout').src = settings.aboutImage;

    if (document.getElementById('urlInputLogo')) document.getElementById('urlInputLogo').value = settings.logoImage || "";
    if (document.getElementById('urlInputHero')) document.getElementById('urlInputHero').value = settings.heroImage || "";
    if (document.getElementById('urlInputAbout')) document.getElementById('urlInputAbout').value = settings.aboutImage || "";

    if (colors) {
        if (document.getElementById('colorCyan')) document.getElementById('colorCyan').value = colors.cyan;
        if (document.getElementById('colorCyanText')) document.getElementById('colorCyanText').value = colors.cyan;

        if (document.getElementById('colorViolet')) document.getElementById('colorViolet').value = colors.violet;
        if (document.getElementById('colorVioletText')) document.getElementById('colorVioletText').value = colors.violet;

        if (document.getElementById('colorMagenta')) document.getElementById('colorMagenta').value = colors.magenta;
        if (document.getElementById('colorMagentaText')) document.getElementById('colorMagentaText').value = colors.magenta;

        if (document.getElementById('colorBgDark')) document.getElementById('colorBgDark').value = colors.bgDark;
        if (document.getElementById('colorBgDarkText')) document.getElementById('colorBgDarkText').value = colors.bgDark;
    }

    if (document.getElementById('settingBrandName')) document.getElementById('settingBrandName').value = settings.brandName || "LUMEN SYSTEM";
    if (document.getElementById('settingBrandSlogan')) document.getElementById('settingBrandSlogan').value = settings.brandSlogan || "CLAREZA GERA RESULTADOS";
    if (document.getElementById('settingWaNumber')) document.getElementById('settingWaNumber').value = settings.waNumber || "24992584133";
    if (document.getElementById('settingEmail')) document.getElementById('settingEmail').value = settings.email || "contato@lumensystem.com.br";
    if (document.getElementById('settingHeroTitle')) document.getElementById('settingHeroTitle').value = settings.heroTitle;
    if (document.getElementById('settingHeroSubtitle')) document.getElementById('settingHeroSubtitle').value = settings.heroSubtitle;

    if (plans) {
        if (document.getElementById('plan1Setup')) document.getElementById('plan1Setup').value = plans.plan1.setup;
        if (document.getElementById('plan1Monthly')) document.getElementById('plan1Monthly').value = plans.plan1.monthly;
        if (document.getElementById('plan2Setup')) document.getElementById('plan2Setup').value = plans.plan2.setup;
        if (document.getElementById('plan2Monthly')) document.getElementById('plan2Monthly').value = plans.plan2.monthly;
        if (document.getElementById('plan3Setup')) document.getElementById('plan3Setup').value = plans.plan3.setup;
        if (document.getElementById('plan3Monthly')) document.getElementById('plan3Monthly').value = plans.plan3.monthly;
    }

    renderAdminCasesList();
}

function renderAdminCasesList() {
    const list = document.getElementById('adminCasesList');
    if (!list) return;

    list.innerHTML = '';
    const cases = appState.portfolioCases || [];

    cases.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'admin-prod-item';
        itemDiv.innerHTML = `
            <div class="info">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/logo_lumen_system.jpg'">
                <div>
                    <strong>${item.title} ${item.isFeatured ? '<span class="text-cyan">(⭐ Principal)</span>' : ''}</strong>
                    <div style="font-size: 12px; color: var(--text-dim);">${item.subtag || item.tag} | ${item.url}</div>
                </div>
            </div>
            <div class="admin-prod-actions">
                <button class="btn btn-outline btn-sm" onclick="editCase(${item.id})"><i class="fa-solid fa-pen"></i> Editar</button>
                <button class="btn btn-danger-outline btn-sm" onclick="deleteCase(${item.id})"><i class="fa-solid fa-trash"></i> Excluir</button>
            </div>
        `;
        list.appendChild(itemDiv);
    });
}

// Global scope inline button handlers
window.editCase = function(id) {
    const item = appState.portfolioCases.find(c => c.id == id);
    if (!item) return;

    document.getElementById('caseEditId').value = item.id;
    document.getElementById('caseTitle').value = item.title;
    document.getElementById('caseTag').value = item.subtag || item.tag;
    document.getElementById('caseUrl').value = item.url;
    document.getElementById('caseImageUrl').value = item.image;
    document.getElementById('caseDesc').value = item.desc;
    document.getElementById('caseIsFeatured').checked = !!item.isFeatured;

    document.getElementById('caseFormTitle').textContent = `Editar Case: ${item.title}`;
    document.getElementById('caseForm').classList.remove('hidden');
};

window.deleteCase = function(id) {
    if (confirm("Tem certeza que deseja remover este case do portfólio?")) {
        appState.portfolioCases = appState.portfolioCases.filter(c => c.id != id);
        saveState();
        showToast("Case removido do portfólio.", "info");
    }
};
