/* ==========================================================================
   LUMEN SYSTEM - CORE JAVASCRIPT & STATE MANAGEMENT
   ========================================================================== */

// Default Initial State
const DEFAULT_STATE = {
    settings: {
        waNumber: "24992584133",
        email: "contato@lumensystem.com.br",
        heroTitle: "Ilumine o seu negócio com sistemas de alta conversão",
        heroSubtitle: "Criamos plataformas web sob medida, landing pages estilo catálogo interativo com painel de gerenciamento simples para você atualizar seus produtos e serviços sem complicações.",
        heroImage: "assets/lumen_landing_page_1785183677226.png"
    },
    products: [
        {
            id: 1,
            title: "Landing Page Catálogo Básica",
            category: "landing-page",
            price: "A partir de R$ 890",
            desc: "Landing page de alta conversão com catálogo visual, botões flutuantes para WhatsApp e otimização para celular.",
            image: "assets/lumen_landing_page_1785183677226.png"
        },
        {
            id: 2,
            title: "Plataforma Web com Painel Admin",
            category: "plataforma",
            price: "R$ 1.890 - R$ 2.800",
            desc: "Plataforma web completa com catálogo dinâmico de produtos, gerenciamento de fotos/dados e formulário interativo.",
            image: "assets/lumen_saas_platform_1785183687003.png"
        },
        {
            id: 3,
            title: "Sistema de Gestão & Catálogo Digital",
            category: "sistema",
            price: "R$ 2.990 - R$ 4.500",
            desc: "Sistema sob medida com banco de dados, fluxo de pedidos para WhatsApp, catálogo avançado e área administrativa completa.",
            image: "assets/lumen_digital_catalog_1785183697092.png"
        },
        {
            id: 4,
            title: "Landing Page Premium com Animações",
            category: "landing-page",
            price: "A partir de R$ 1.250",
            desc: "Design futurista com animações 3D, simulador de orçamento integrado e rastreamento de cliques no WhatsApp.",
            image: "assets/lumen_landing_page_1785183677226.png"
        }
    ]
};

// Global App State
let appState = loadState();
let isAdminLoggedIn = false;

// Save / Load State from LocalStorage
function loadState() {
    const saved = localStorage.getItem('lumen_system_state');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Erro ao carregar estado do localStorage:", e);
        }
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
    localStorage.setItem('lumen_system_state', JSON.stringify(appState));
    renderApp();
}

// Format Phone for Display: 24992584133 -> (24) 99258-4133
function formatPhone(numStr) {
    const cleaned = ('' + numStr).replace(/\D/g, '');
    if (cleaned.length === 11) {
        return `(${cleaned.substring(0,2)}) ${cleaned.substring(2,7)}-${cleaned.substring(7)}`;
    }
    return numStr;
}

// Get Direct WhatsApp Link
function getWaLink(customMessage = "") {
    const cleanNum = appState.settings.waNumber.replace(/\D/g, '');
    const numWithCountry = cleanNum.startsWith('55') ? cleanNum : `55${cleanNum}`;
    const text = customMessage ? encodeURIComponent(customMessage) : encodeURIComponent("Olá! Vim pelo site da Lumen System.");
    return `https://wa.me/${numWithCountry}?text=${text}`;
}

// Toast Notifications
function showToast(msg, type = "info") {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-cyan"></i> <span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// Main Render Function
function renderApp() {
    const { settings, products } = appState;
    const formattedPhone = formatPhone(settings.waNumber);

    // Update Header / Contact Displays
    document.getElementById('headerWaNumberDisplay').textContent = formattedPhone;
    document.getElementById('headerWaBtn').href = getWaLink();
    document.getElementById('contactWaDisplay').textContent = formattedPhone;
    document.getElementById('contactWaLink').href = getWaLink();
    document.getElementById('contactEmailDisplay').textContent = settings.email;
    document.getElementById('footerWaDisplay').textContent = formattedPhone;
    document.getElementById('footerEmailDisplay').textContent = settings.email;
    document.getElementById('floatWaBtn').href = getWaLink();

    // Update Hero
    document.getElementById('heroTitle').innerHTML = settings.heroTitle.includes('span') 
        ? settings.heroTitle 
        : `${settings.heroTitle.replace(/sistemas de alta conversão/gi, '<span class="gradient-text">sistemas de alta conversão</span>')}`;
    document.getElementById('heroSubtitle').textContent = settings.heroSubtitle;
    if (document.getElementById('heroMainImage')) {
        document.getElementById('heroMainImage').src = settings.heroImage;
    }

    // Render Catalog
    renderCatalog('all');
    if (isAdminLoggedIn) {
        renderAdminProductsList();
    }
}

// Render Catalog Grid
function renderCatalog(filter = "all") {
    const catalogGrid = document.getElementById('catalogGrid');
    catalogGrid.innerHTML = '';

    const filtered = filter === "all" 
        ? appState.products 
        : appState.products.filter(p => p.category === filter);

    if (filtered.length === 0) {
        catalogGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-folder-open" style="font-size: 40px; margin-bottom: 12px; display: block;"></i>
                Nenhum serviço encontrado nesta categoria no momento.
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'catalog-card';
        
        const categoryLabels = {
            'landing-page': 'Landing Page Catálogo',
            'plataforma': 'Plataforma Web',
            'sistema': 'Sistema Sob Medida'
        };

        const waProdMsg = `Olá! Gostaria de um orçamento para o serviço: *${item.title}* (${item.price})`;

        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${item.image}" alt="${item.title}" class="card-img" onerror="this.src='assets/lumen_landing_page_1785183677226.png'">
                <span class="card-category-badge">${categoryLabels[item.category] || 'Sistema'}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>
                <div class="card-price-box">
                    <div>
                        <span class="price-label">Média de Investimento</span>
                        <span class="price-tag">${item.price}</span>
                    </div>
                </div>
                <a href="${getWaLink(waProdMsg)}" target="_blank" class="btn btn-primary btn-full">
                    <i class="fa-brands fa-whatsapp"></i> Solicitar no WhatsApp
                </a>
            </div>
        `;

        catalogGrid.appendChild(card);
    });
}

// Budget Simulator Calculation
function calculateBudget() {
    const selectedProjectRadio = document.querySelector('input[name="projectType"]:checked');
    if (!selectedProjectRadio) return;

    let basePrice = parseFloat(selectedProjectRadio.getAttribute('data-price')) || 0;

    const checkedAddons = document.querySelectorAll('input[name="addon"]:checked');
    checkedAddons.forEach(cb => {
        basePrice += parseFloat(cb.getAttribute('data-price')) || 0;
    });

    const display = document.getElementById('simTotalDisplay');
    display.textContent = `R$ ${basePrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}

// Send Simulator Budget to WhatsApp
function sendSimulatorToWa() {
    const selectedRadio = document.querySelector('input[name="projectType"]:checked');
    const projectTitle = selectedRadio.parentElement.querySelector('.title').textContent;
    const totalVal = document.getElementById('simTotalDisplay').textContent;

    const addons = [];
    document.querySelectorAll('input[name="addon"]:checked').forEach(cb => {
        addons.push(cb.parentElement.textContent.trim());
    });

    let msg = `Olá! Fiz uma simulação no site da *Lumen System*:\n\n`;
    msg += `📌 *Projeto:* ${projectTitle}\n`;
    msg += `➕ *Adicionais:* ${addons.join(', ') || 'Nenhum'}\n`;
    msg += `💰 *Estimativa Total:* ${totalVal}\n\n`;
    msg += `Gostaria de dar andamento a esta proposta!`;

    window.open(getWaLink(msg), '_blank');
}

// DOM Event Listeners Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderApp();

    // Header Scroll Effect
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // Filter Buttons Listener
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCatalog(btn.getAttribute('data-filter'));
        });
    });

    // Simulator Listeners
    const simRadios = document.querySelectorAll('input[name="projectType"]');
    simRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('.radio-card').forEach(c => c.classList.remove('active'));
            e.target.closest('.radio-card').classList.add('active');
            calculateBudget();
        });
    });

    const simAddons = document.querySelectorAll('input[name="addon"]');
    simAddons.forEach(cb => cb.addEventListener('change', calculateBudget));

    document.getElementById('sendSimWaBtn').addEventListener('click', sendSimulatorToWa);
    calculateBudget();

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;
        const service = document.getElementById('contactService').value;
        const msg = document.getElementById('contactMessage').value;

        showToast("Mensagem pronta! Redirecionando para o WhatsApp...", "success");

        let waText = `Olá, meu nome é *${name}* (${phone}).\n`;
        waText += `Tenho interesse em: *${service}*.\n\n`;
        waText += `Mensagem: ${msg}`;

        setTimeout(() => {
            window.open(getWaLink(waText), '_blank');
            contactForm.reset();
        }, 1200);
    });

    // Admin Modal Logic
    const adminModalBackdrop = document.getElementById('adminModalBackdrop');
    const openAdminBtn = document.getElementById('openAdminBtn');
    const floatAdminBtn = document.getElementById('floatAdminBtn');
    const footerAdminLink = document.getElementById('footerAdminLink');
    const closeAdminModalBtn = document.getElementById('closeAdminModalBtn');

    function openAdminModal() {
        adminModalBackdrop.classList.add('active');
    }

    function closeAdminModal() {
        adminModalBackdrop.classList.remove('active');
    }

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
            renderAdminProductsList();
            populateGeneralSettingsForm();
            showToast("Bem-vindo ao Painel Admin da Lumen System!", "success");
        } else {
            showToast("Usuário ou senha incorretos!", "error");
        }
    });

    // Admin Tabs Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(tBtn => {
        tBtn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            tBtn.classList.add('active');
            document.getElementById(tBtn.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Admin Product Add/Edit Form
    const btnAddNewProduct = document.getElementById('btnAddNewProduct');
    const productEditForm = document.getElementById('productEditForm');
    const btnCancelProductForm = document.getElementById('btnCancelProductForm');

    btnAddNewProduct.addEventListener('click', () => {
        productEditForm.reset();
        document.getElementById('prodEditId').value = "";
        document.getElementById('productFormTitle').textContent = "Adicionar Novo Produto no Catálogo";
        productEditForm.classList.remove('hidden');
    });

    btnCancelProductForm.addEventListener('click', () => {
        productEditForm.classList.add('hidden');
    });

    productEditForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const idVal = document.getElementById('prodEditId').value;
        const title = document.getElementById('prodTitle').value;
        const category = document.getElementById('prodCategory').value;
        const price = document.getElementById('prodPrice').value;
        const image = document.getElementById('prodImage').value;
        const desc = document.getElementById('prodDesc').value;

        if (idVal) {
            // Edit existing
            const index = appState.products.findIndex(p => p.id == idVal);
            if (index !== -1) {
                appState.products[index] = { id: parseInt(idVal), title, category, price, image, desc };
                showToast("Produto atualizado com sucesso!", "success");
            }
        } else {
            // Add new
            const newId = appState.products.length ? Math.max(...appState.products.map(p => p.id)) + 1 : 1;
            appState.products.push({ id: newId, title, category, price, image, desc });
            showToast("Novo produto adicionado ao catálogo!", "success");
        }

        saveState();
        productEditForm.classList.add('hidden');
    });

    // General Settings Form Save
    const generalSettingsForm = document.getElementById('generalSettingsForm');
    generalSettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        appState.settings.waNumber = document.getElementById('settingWaNumber').value.trim();
        appState.settings.email = document.getElementById('settingEmail').value.trim();
        appState.settings.heroTitle = document.getElementById('settingHeroTitle').value.trim();
        appState.settings.heroSubtitle = document.getElementById('settingHeroSubtitle').value.trim();
        appState.settings.heroImage = document.getElementById('settingHeroImage').value.trim();

        saveState();
        showToast("Configurações da empresa salvas com sucesso!", "success");
    });

    // Reset Factory Defaults
    document.getElementById('btnResetToDefaults').addEventListener('click', () => {
        if (confirm("Tem certeza que deseja restaurar o catálogo e dados originais de fábrica?")) {
            localStorage.removeItem('lumen_system_state');
            appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
            saveState();
            populateGeneralSettingsForm();
            showToast("Dados restaurados para o padrão de fábrica!", "info");
        }
    });
});

// Render Admin Products List
function renderAdminProductsList() {
    const list = document.getElementById('adminProductsList');
    list.innerHTML = '';

    appState.products.forEach(p => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'admin-prod-item';
        itemDiv.innerHTML = `
            <div class="info">
                <img src="${p.image}" alt="${p.title}" onerror="this.src='assets/lumen_landing_page_1785183677226.png'">
                <div>
                    <strong>${p.title}</strong>
                    <div style="font-size: 12px; color: var(--text-dim);">${p.price}</div>
                </div>
            </div>
            <div class="admin-prod-actions">
                <button class="btn btn-outline btn-sm" onclick="editProduct(${p.id})"><i class="fa-solid fa-pen"></i> Editar</button>
                <button class="btn btn-danger-outline btn-sm" onclick="deleteProduct(${p.id})"><i class="fa-solid fa-trash"></i> Excluir</button>
            </div>
        `;
        list.appendChild(itemDiv);
    });
}

// Populate Admin General Settings Form
function populateGeneralSettingsForm() {
    document.getElementById('settingWaNumber').value = appState.settings.waNumber;
    document.getElementById('settingEmail').value = appState.settings.email;
    document.getElementById('settingHeroTitle').value = appState.settings.heroTitle;
    document.getElementById('settingHeroSubtitle').value = appState.settings.heroSubtitle;
    document.getElementById('settingHeroImage').value = appState.settings.heroImage;
}

// Global functions for inline button clicks in Admin
window.editProduct = function(id) {
    const prod = appState.products.find(p => p.id == id);
    if (!prod) return;

    document.getElementById('prodEditId').value = prod.id;
    document.getElementById('prodTitle').value = prod.title;
    document.getElementById('prodCategory').value = prod.category;
    document.getElementById('prodPrice').value = prod.price;
    document.getElementById('prodImage').value = prod.image;
    document.getElementById('prodDesc').value = prod.desc;

    document.getElementById('productFormTitle').textContent = `Editar Produto: ${prod.title}`;
    document.getElementById('productEditForm').classList.remove('hidden');
};

window.deleteProduct = function(id) {
    if (confirm("Deseja realmente remover este produto do catálogo?")) {
        appState.products = appState.products.filter(p => p.id != id);
        saveState();
        showToast("Produto removido do catálogo.", "info");
    }
};
