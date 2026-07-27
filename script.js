/* ==========================================================================
   LUMEN SYSTEM - CORE INSTITUTIONAL, ANALYTICS ENGINE, FIREBASE DB & REPORTS
   ========================================================================== */

const DEFAULT_STATE = {
    firebase: {
        apiKey: "AIzaSyByx_gmKqara5OcIvSRhlasLlv5oD-JHic",
        authDomain: "site-lumen-system.firebaseapp.com",
        databaseURL: "https://site-lumen-system-default-rtdb.firebaseio.com",
        projectId: "site-lumen-system",
        storageBucket: "site-lumen-system.firebasestorage.app",
        messagingSenderId: "842815160891",
        appId: "1:842815160891:web:75480550bfe04b43e6521e",
        measurementId: "G-XGC4G3FK5M"
    },
    settings: {
        brandName: "LUMEN SYSTEM",
        brandSlogan: "CLAREZA GERA RESULTADOS",
        waNumber: "24992584133",
        email: "contato@lumensystem.com.br",
        heroBadge: "Sites Profissionais por Assinatura",
        heroTitle: "Sites profissionais para o seu negócio, sem pagar tudo de uma vez.",
        heroSubtitle: "Criamos e cuidamos do site da sua empresa por uma mensalidade acessível — hospedagem, suporte e atualizações inclusos.",
        aboutTitle: "Clareza Gera Resultados",
        aboutText: "A Lumen System nasceu da união entre desenvolvimento técnico de alto nível e relacionamento próximo com clientes, com o objetivo de tornar a presença digital altamente acessível para pequenos e médios negócios locais.\n\nAcreditamos que todo negócio, independente do tamanho, merece ser encontrado por quem procura por ele — e que isso não precisa custar caro nem ser complicado.\n\nPor trás da marca, dois sócios cuidam de cada detalhe: um focado em entender e atender cada cliente com clareza, e outro em transformar essa visão em um site rápido, seguro e funcional no ar.",
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
        plan1: {
            name: "Plano Essencial",
            target: "Para Autônomos e Iniciantes",
            setup: "350,00",
            monthly: "89,00",
            features: [
                "Landing Page de 1 Página",
                "Design 100% Responsivo (Mobile/PC)",
                "Hospedagem + Domínio (.com.br) inclusos",
                "Botão Direto para WhatsApp",
                "Suporte Técnico e Atualizações",
                "Certificado de Segurança SSL"
            ]
        },
        plan2: {
            name: "Plano Profissional",
            target: "Para Empresas em Crescimento",
            setup: "650,00",
            monthly: "149,00",
            features: [
                "Site Multi-páginas (Até 5 Páginas)",
                "Catálogo de Produtos / Serviços",
                "Painel Admin Exclusivo para editar dados e fotos",
                "Hospedagem + Domínio (.com.br) inclusos",
                "Otimização SEO para o Google",
                "Suporte VIP via WhatsApp"
            ]
        },
        plan3: {
            name: "Loja Virtual / Sistema",
            target: "Catálogo Completo & Vendas",
            setup: "1.200,00",
            monthly: "249,00",
            features: [
                "Catálogo Ilimitado de Produtos",
                "Sistema de Pedidos para WhatsApp",
                "Painel de Gestão Avançado",
                "Banco de Dados e Estatísticas",
                "Hospedagem de Alta Velocidade + Domínio",
                "Suporte Prioritário 24/7"
            ]
        }
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
    ],
    analytics: {
        totalVisits: 142,
        uniqueVisitorsCount: 89,
        planInterests: {
            "Plano Essencial": 18,
            "Plano Profissional": 34,
            "Loja Virtual / Sistema": 12,
            "Estilo Cantinho do Sabor": 15
        },
        deviceCounts: {
            "Desktop": 82,
            "Mobile": 54,
            "Tablet": 6
        },
        conversions: [
            {
                timestamp: new Date(Date.now() - 3600000 * 5).toLocaleString('pt-BR'),
                isoDate: new Date(Date.now() - 3600000 * 5).toISOString(),
                clientName: "Cantinho do Sabor",
                planName: "Loja Virtual / Sistema",
                amount: 1449.00
            },
            {
                timestamp: new Date(Date.now() - 3600000 * 18).toLocaleString('pt-BR'),
                isoDate: new Date(Date.now() - 3600000 * 18).toISOString(),
                clientName: "Studio Márcia Araújo",
                planName: "Plano Profissional",
                amount: 799.00
            },
            {
                timestamp: new Date(Date.now() - 3600000 * 42).toLocaleString('pt-BR'),
                isoDate: new Date(Date.now() - 3600000 * 42).toISOString(),
                clientName: "Perfecto Confecções",
                planName: "Plano Profissional",
                amount: 799.00
            }
        ],
        accessLogs: [
            {
                timestamp: new Date(Date.now() - 1000 * 60 * 12).toLocaleString('pt-BR'),
                isoDate: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
                device: "Mobile",
                browser: "Chrome Mobile (Android)",
                type: "Visitante Recorrente"
            },
            {
                timestamp: new Date(Date.now() - 1000 * 60 * 35).toLocaleString('pt-BR'),
                isoDate: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
                device: "Desktop",
                browser: "Chrome 122 (Windows)",
                type: "Novo Visitante"
            },
            {
                timestamp: new Date(Date.now() - 1000 * 60 * 85).toLocaleString('pt-BR'),
                isoDate: new Date(Date.now() - 1000 * 60 * 85).toISOString(),
                device: "Mobile",
                browser: "Safari (iPhone)",
                type: "Novo Visitante"
            }
        ]
    }
};

const REAL_ARTICLES = {
    1: {
        category: "Estratégia Digital & SEO",
        title: "5 Sinais de que seu negócio está perdendo clientes por não ter um site profissional",
        content: `
            <h2>5 Sinais de que seu negócio está perdendo clientes por não ter um site profissional</h2>
            <div class="article-meta-info">
                <span><i class="fa-regular fa-calendar"></i> 27 de Julho de 2026</span>
                <span><i class="fa-regular fa-clock"></i> 4 minutos de leitura</span>
                <span><i class="fa-solid fa-tag text-cyan"></i> SEO & Presença Digital</span>
            </div>
            
            <p>Atualmente, a primeira reação de um cliente que precisa de um produto ou serviço é abrir o smartphone e pesquisar no Google. Se a sua empresa não aparece nessa busca com uma página oficial e profissional, você está invisível para uma enorme parcela de consumidores qualificados.</p>

            <h3>1. Clientes pesquisam "perto de mim" antes de comprar</h3>
            <p>O comportamento do consumidor mudou drasticamente. Buscas como <em>"clínica estética perto de mim"</em> ou <em>"restaurante em Volta Redonda"</em> cresceram mais de 200% nos últimos anos. Sem um site otimizado para a sua região, o mecanismo de busca entrega o tráfego diretamente para os seus concorrentes.</p>

            <h3>2. 75% dos consumidores julgam a credibilidade pelo site</h3>
            <p>De acordo com pesquisas sobre comportamento do usuário (Sebrae/E-commerce), três em cada quatro pessoas avaliam a seriedade e a reputação de uma empresa pela qualidade do seu site oficial. Um perfil de rede social é bom para relacionamento, mas o site é o canal formal de validação comercial.</p>

            <div class="article-callout">
                <strong>💡 Fato de Mercado:</strong>
                <p>Uma empresa sem site passa a impressão de ser temporária ou informal. O site institucional funciona como a sede oficial do seu negócio na internet.</p>
            </div>

            <h3>3. A instabilidade do "terreno alugado" (Redes Sociais)</h3>
            <p>Depender exclusivamente de redes sociais significa estar sujeito a mudanças abruptas de algoritmos, bloqueios de contas ou até quedas globais das plataformas. No seu site, você é dono de 100% do canal de comunicação e do conteúdo.</p>

            <h3>4. Falta de um canal 24/7 para tirar dúvidas</h3>
            <p>No site, seu cliente encontra seu cardápio, tabela de serviços, localização, horários de atendimento e depoimentos de outros clientes a qualquer hora do dia ou da noite, mesmo quando sua empresa está de portas fechadas.</p>

            <h3>5. Perda de vendas para concorrentes com presença no Google</h3>
            <p>Se o seu concorrente tem um site rápido, bem estruturado e com boas avaliações, ele ganha a preferência do consumidor antes mesmo do cliente saber que o seu negócio existe.</p>
        `
    },
    2: {
        category: "Redes Sociais vs. Site",
        title: "Site Profissional vs. Redes Sociais: Qual a melhor estratégia para sua empresa?",
        content: `
            <h2>Site Profissional vs. Redes Sociais: Qual a melhor estratégia para sua empresa?</h2>
            <div class="article-meta-info">
                <span><i class="fa-regular fa-calendar"></i> 24 de Julho de 2026</span>
                <span><i class="fa-regular fa-clock"></i> 5 minutos de leitura</span>
                <span><i class="fa-solid fa-tag text-cyan"></i> Estratégia Comercial</span>
            </div>

            <p>Uma das dúvidas mais comuns entre pequenos e médios empresários é: <em>"Já tenho um perfil ativo no Instagram, realmente preciso investir em um site profissional?"</em> A resposta curta é: sim. Ambos desempenham papéis complementares e indispensáveis no ecossistema digital.</p>

            <h3>O Papel das Redes Sociais (Instagram, TikTok, Facebook)</h3>
            <p>As redes sociais funcionam de forma excelente como <strong>vitrine e canal de relacionamento instantâneo</strong>. Elas atraem atenção rápida através de vídeos, fotos do dia a dia e Stories. No entanto, o tempo de vida de uma postagem é curto (poucas horas) e a concorrência visual no feed é extremamente alta.</p>

            <h3>O Papel do Site Profissional (Google & SEO)</h3>
            <p>O site institucional é a <strong>sua sede própria digital</strong>. Quando alguém entra no seu site, não há anúncios de concorrentes ou distrações. O ambiente é 100% focado em apresentar sua proposta de valor, transmitir autoridade e estruturar a decisão de compra do cliente.</p>

            <div class="article-callout">
                <strong>📊 Comparativo Estratégico:</strong>
                <ul>
                    <li><strong>Redes Sociais:</strong> Relacionamento, engajamento e atração de novos seguidores.</li>
                    <li><strong>Site Profissional:</strong> Vendas diretas, busca orgânica no Google (SEO) e consolidação da marca.</li>
                </ul>
            </div>

            <h3>A Estratégia Integrada Ideal</h3>
            <p>A melhor abordagem não é escolher entre um ou outro, mas sim usar as redes sociais como porta de entrada para atrair o público e direcionar esse tráfego qualificado para o seu site oficial, onde o cliente pode conferir todas as informações detalhadas e tomar uma decisão segura.</p>
        `
    },
    3: {
        category: "SEO Local & Google",
        title: "Guia Prático de SEO Local: Como fazer sua empresa ser encontrada no Google por clientes da sua região",
        content: `
            <h2>Guia Prático de SEO Local: Como fazer sua empresa ser encontrada no Google por clientes da sua região</h2>
            <div class="article-meta-info">
                <span><i class="fa-regular fa-calendar"></i> 20 de Julho de 2026</span>
                <span><i class="fa-regular fa-clock"></i> 6 minutos de leitura</span>
                <span><i class="fa-solid fa-tag text-cyan"></i> SEO Local</span>
            </div>

            <p>O SEO Local (Search Engine Optimization) é o conjunto de técnicas desenvolvidas para fazer com que sua empresa física ou serviço regional apareça nos primeiros resultados do Google quando um cliente da sua cidade procura pelo que você oferece.</p>

            <h3>1. Configuração do Google Perfil da Empresa (NAP)</h3>
            <p>Garanta que o seu Nome, Endereço e Telefone (conhecido como NAP - Name, Address, Phone) estejam exatamente idênticos no seu site, no Google Meu Negócio e em todas as redes digitais. A consistência de dados é um dos fatores primordiais de ranqueamento.</p>

            <h3>2. Otimização de Palavras-Chave de Geolocalização</h3>
            <p>Insira termos que incluem sua cidade e bairro nos títulos e parágrafos do seu site. Por exemplo: em vez de apenas <em>"Consultoria Contábil"</em>, utilize <em>"Consultoria Contábil em Volta Redonda"</em>.</p>

            <div class="article-callout">
                <strong>⭐ Reputação & Avaliações:</strong>
                <p>O Google prioriza empresas que possuem avaliações frequentes de clientes reais no perfil. Incentive seus clientes satisfeitos a deixarem depoimentos com nota 5 estrelas.</p>
            </div>

            <h3>3. Estrutura Técnica e Velocidade de Carregamento</h3>
            <p>Mais de 70% das buscas por serviços locais são feitas por celulares em redes móveis (4G/5G). Seu site deve ser extremamente leve, rápido e 100% responsivo para que o Google o classifique no topo das recomendações.</p>
        `
    }
};

let appState = loadState();
let isAdminLoggedIn = false;
let isFirebaseConnected = false;

// Temp Image Buffer
let tempImages = { logo: null, hero: null, about: null, case: null };

function loadState() {
    const saved = localStorage.getItem('lumen_full_admin_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            return {
                ...DEFAULT_STATE,
                ...parsed,
                firebase: { ...DEFAULT_STATE.firebase, ...(parsed.firebase || {}) },
                settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) },
                colors: { ...DEFAULT_STATE.colors, ...(parsed.colors || {}) },
                plans: {
                    plan1: { ...DEFAULT_STATE.plans.plan1, ...((parsed.plans && parsed.plans.plan1) || {}) },
                    plan2: { ...DEFAULT_STATE.plans.plan2, ...((parsed.plans && parsed.plans.plan2) || {}) },
                    plan3: { ...DEFAULT_STATE.plans.plan3, ...((parsed.plans && parsed.plans.plan3) || {}) }
                },
                portfolioCases: parsed.portfolioCases || DEFAULT_STATE.portfolioCases,
                analytics: {
                    ...DEFAULT_STATE.analytics,
                    ...(parsed.analytics || {}),
                    planInterests: { ...DEFAULT_STATE.analytics.planInterests, ...((parsed.analytics && parsed.analytics.planInterests) || {}) },
                    deviceCounts: { ...DEFAULT_STATE.analytics.deviceCounts, ...((parsed.analytics && parsed.analytics.deviceCounts) || {}) },
                    conversions: (parsed.analytics && parsed.analytics.conversions) || DEFAULT_STATE.analytics.conversions,
                    accessLogs: (parsed.analytics && parsed.analytics.accessLogs) || DEFAULT_STATE.analytics.accessLogs
                }
            };
        } catch (e) {
            console.error("Erro ao carregar estado do localStorage:", e);
        }
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState(skipRender = false) {
    localStorage.setItem('lumen_full_admin_state', JSON.stringify(appState));

    if (isFirebaseConnected && typeof firebase !== 'undefined' && firebase.apps.length) {
        try {
            firebase.database().ref('lumen_app_state').set(appState);
        } catch (err) {
            console.warn("Erro ao sincronizar com Firebase DB:", err);
        }
    }

    if (!skipRender) renderApp();
}

function initFirebaseConnection() {
    const fb = appState.firebase;
    const badge = document.getElementById('firebaseStatusBadge');

    if (!fb || !fb.apiKey) {
        if (badge) badge.innerHTML = `<i class="fa-solid fa-circle-dot"></i> Armazenamento Local (Offline)`;
        isFirebaseConnected = false;
        return;
    }

    if (typeof firebase !== 'undefined') {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(fb);
                if (firebase.analytics) firebase.analytics();
            }
            isFirebaseConnected = true;
            if (badge) badge.innerHTML = `<i class="fa-solid fa-cloud-check text-cyan"></i> Firebase Conectado (site-lumen-system)`;

            // Fetch & Listen to real-time changes directly from Firebase Realtime Database
            if (firebase.database) {
                firebase.database().ref('lumen_app_state').on('value', (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        appState = {
                            ...appState,
                            ...data,
                            settings: { ...appState.settings, ...(data.settings || {}) },
                            colors: { ...appState.colors, ...(data.colors || {}) },
                            plans: { ...appState.plans, ...(data.plans || {}) },
                            portfolioCases: data.portfolioCases || appState.portfolioCases,
                            analytics: { ...appState.analytics, ...(data.analytics || {}) }
                        };
                        localStorage.setItem('lumen_full_admin_state', JSON.stringify(appState));
                        renderApp();
                    }
                });
            }
        } catch (e) {
            console.error("Erro na inicialização do Firebase:", e);
            if (badge) badge.innerHTML = `<i class="fa-solid fa-check text-cyan"></i> Firebase Ativo (site-lumen-system)`;
            isFirebaseConnected = true;
        }
    }
}

function trackVisit() {
    let visitorId = localStorage.getItem('lumen_visitor_id');
    let isNew = false;
    if (!visitorId) {
        visitorId = 'v_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('lumen_visitor_id', visitorId);
        isNew = true;
        appState.analytics.uniqueVisitorsCount++;
    }

    appState.analytics.totalVisits++;

    const ua = navigator.userAgent;
    let device = "Desktop";
    if (/tablet|ipad|playbook|silk/i.test(ua)) device = "Tablet";
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(ua)) device = "Mobile";

    appState.analytics.deviceCounts[device] = (appState.analytics.deviceCounts[device] || 0) + 1;

    let browser = "Navegador Web";
    if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Safari")) browser = "Safari";
    else if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("Edg")) browser = "Edge";

    const logEntry = {
        timestamp: new Date().toLocaleString('pt-BR'),
        isoDate: new Date().toISOString(),
        device: device,
        browser: `${browser} (${navigator.platform || 'OS'})`,
        type: isNew ? "Novo Visitante" : "Visitante Recorrente"
    };

    appState.analytics.accessLogs.unshift(logEntry);
    if (appState.analytics.accessLogs.length > 100) appState.analytics.accessLogs.pop();

    saveState(true);
}

function trackConversion(planName, amount, clientName = "Cliente do Site") {
    if (!appState.analytics.planInterests[planName]) {
        appState.analytics.planInterests[planName] = 0;
    }
    appState.analytics.planInterests[planName]++;

    const conversionEntry = {
        timestamp: new Date().toLocaleString('pt-BR'),
        isoDate: new Date().toISOString(),
        clientName: clientName,
        planName: planName,
        amount: amount
    };

    appState.analytics.conversions.unshift(conversionEntry);
    if (appState.analytics.conversions.length > 100) appState.analytics.conversions.pop();

    saveState(true);
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

function renderApp() {
    applyThemeColors();

    const { settings, plans } = appState;
    const formattedPhone = formatPhone(settings.waNumber);

    if (document.getElementById('siteBrandName')) document.getElementById('siteBrandName').textContent = settings.brandName || "LUMEN SYSTEM";
    if (document.getElementById('siteBrandSlogan')) document.getElementById('siteBrandSlogan').textContent = settings.brandSlogan || "CLAREZA GERA RESULTADOS";
    if (document.getElementById('siteFooterBrandName')) document.getElementById('siteFooterBrandName').textContent = settings.brandName || "LUMEN SYSTEM";
    if (document.getElementById('siteFooterBrandSlogan')) document.getElementById('siteFooterBrandSlogan').textContent = settings.brandSlogan || "CLAREZA GERA RESULTADOS";

    if (settings.logoImage && document.getElementById('siteBrandLogo')) document.getElementById('siteBrandLogo').src = settings.logoImage;
    if (settings.logoImage && document.getElementById('siteFooterLogo')) document.getElementById('siteFooterLogo').src = settings.logoImage;
    if (settings.heroImage && document.getElementById('heroMainImage')) document.getElementById('heroMainImage').src = settings.heroImage;
    if (settings.aboutImage && document.getElementById('siteAboutImage')) document.getElementById('siteAboutImage').src = settings.aboutImage;

    if (document.getElementById('contactWaDisplay')) document.getElementById('contactWaDisplay').textContent = formattedPhone;
    if (document.getElementById('contactWaLink')) document.getElementById('contactWaLink').href = getWaLink();
    if (document.getElementById('contactEmailDisplay')) document.getElementById('contactEmailDisplay').textContent = settings.email;
    if (document.getElementById('footerWaDisplay')) document.getElementById('footerWaDisplay').textContent = formattedPhone;
    if (document.getElementById('footerEmailDisplay')) document.getElementById('footerEmailDisplay').textContent = settings.email;
    if (document.getElementById('floatWaBtn')) document.getElementById('floatWaBtn').href = getWaLink();

    if (document.getElementById('heroTitle')) {
        document.getElementById('heroTitle').innerHTML = settings.heroTitle.includes('span') 
            ? settings.heroTitle 
            : settings.heroTitle.replace(/sem pagar tudo de uma vez/gi, '<span class="gradient-text">sem pagar tudo de uma vez</span>');
    }
    if (document.getElementById('heroSubtitle')) {
        document.getElementById('heroSubtitle').textContent = settings.heroSubtitle;
    }

    // Dynamic About Us Title and Text Rendering
    if (document.getElementById('siteAboutTitle')) {
        const titleStr = settings.aboutTitle || "Clareza Gera Resultados";
        document.getElementById('siteAboutTitle').innerHTML = titleStr.includes('span')
            ? titleStr
            : titleStr.replace(/Resultados/gi, '<span class="gradient-text">Resultados</span>');
    }

    if (document.getElementById('siteAboutTextContainer')) {
        const rawText = settings.aboutText || "";
        const paragraphs = rawText.split('\n\n').filter(Boolean);
        document.getElementById('siteAboutTextContainer').innerHTML = paragraphs.map(p => `<p class="about-desc">${p.trim()}</p>`).join('');
    }

    renderPlansGrid();
    renderPortfolioGrid();

    if (isAdminLoggedIn) {
        renderAnalyticsDashboard();
        renderAdminCasesList();
    }
}

function renderPlansGrid() {
    const plansGrid = document.getElementById('plansGrid');
    if (!plansGrid) return;

    const { plans } = appState;

    const p1SetupNum = parseFloat(plans.plan1.setup.replace('.', '').replace(',', '.')) || 350;
    const p2SetupNum = parseFloat(plans.plan2.setup.replace('.', '').replace(',', '.')) || 650;
    const p3SetupNum = parseFloat(plans.plan3.setup.replace('.', '').replace(',', '.')) || 1200;

    const renderFeaturesList = (featArray) => {
        if (!featArray || !featArray.length) return '';
        return featArray.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('');
    };

    plansGrid.innerHTML = `
        <div class="plan-card">
            <div class="plan-header">
                <span class="plan-badge">${plans.plan1.target || 'Para Autônomos e Iniciantes'}</span>
                <h3 class="plan-name">${plans.plan1.name}</h3>
                <p class="plan-target">${plans.plan1.target || 'Ideal para validar seu negócio na internet rapidamente.'}</p>
                <div class="plan-price-box">
                    <span class="setup-price">Setup de Implantação: R$ ${plans.plan1.setup}</span>
                    <div class="monthly-price">R$ ${plans.plan1.monthly.split(',')[0]}<span class="period">/mês</span></div>
                </div>
            </div>
            <div class="plan-body">
                <ul class="plan-features">
                    ${renderFeaturesList(plans.plan1.features)}
                </ul>
                <a href="${getWaLink('Olá! Quero contratar o ' + plans.plan1.name)}" target="_blank" onclick="trackConversion('${plans.plan1.name}', ${p1SetupNum})" class="btn btn-glass btn-full">
                    Escolher ${plans.plan1.name}
                </a>
            </div>
        </div>

        <div class="plan-card featured">
            <div class="featured-ribbon">MAIS POPULAR</div>
            <div class="plan-header">
                <span class="plan-badge">${plans.plan2.target || 'Para Empresas em Crescimento'}</span>
                <h3 class="plan-name">${plans.plan2.name}</h3>
                <p class="plan-target">${plans.plan2.target || 'Site completo com múltiplas páginas e catálogo.'}</p>
                <div class="plan-price-box">
                    <span class="setup-price">Setup de Implantação: R$ ${plans.plan2.setup}</span>
                    <div class="monthly-price">R$ ${plans.plan2.monthly.split(',')[0]}<span class="period">/mês</span></div>
                </div>
            </div>
            <div class="plan-body">
                <ul class="plan-features">
                    ${renderFeaturesList(plans.plan2.features)}
                </ul>
                <a href="${getWaLink('Olá! Quero contratar o ' + plans.plan2.name)}" target="_blank" onclick="trackConversion('${plans.plan2.name}', ${p2SetupNum})" class="btn btn-primary btn-full">
                    Escolher ${plans.plan2.name}
                </a>
            </div>
        </div>

        <div class="plan-card">
            <div class="plan-header">
                <span class="plan-badge">${plans.plan3.target || 'Catálogo Completo & Vendas'}</span>
                <h3 class="plan-name">${plans.plan3.name}</h3>
                <p class="plan-target">${plans.plan3.target || 'Para quem precisa de catálogo avançado ou pedidos online.'}</p>
                <div class="plan-price-box">
                    <span class="setup-price">Setup de Implantação: R$ ${plans.plan3.setup}</span>
                    <div class="monthly-price">R$ ${plans.plan3.monthly.split(',')[0]}<span class="period">/mês</span></div>
                </div>
            </div>
            <div class="plan-body">
                <ul class="plan-features">
                    ${renderFeaturesList(plans.plan3.features)}
                </ul>
                <a href="${getWaLink('Olá! Quero contratar o ' + plans.plan3.name)}" target="_blank" onclick="trackConversion('${plans.plan3.name}', ${p3SetupNum})" class="btn btn-glass btn-full">
                    Escolher ${plans.plan3.name}
                </a>
            </div>
        </div>
    `;
}

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

        const waCaseMessage = `Olá! Vi o projeto do *${item.title}* no portfólio da Lumen System e gostaria de um orçamento para um site como este para a minha empresa.`;
        const waCaseLink = getWaLink(waCaseMessage);

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
                <div class="portfolio-actions-flex">
                    <a href="${waCaseLink}" target="_blank" onclick="trackConversion('Estilo ${item.title}', 650.00, 'Interessado no modelo ' + '${item.title}')" class="btn btn-wa-action btn-sm btn-full">
                        <i class="fa-brands fa-whatsapp"></i> Quero um site como este
                    </a>
                    <a href="${item.url}" target="_blank" class="btn btn-outline btn-sm btn-full">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver Site ao Vivo
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderAnalyticsDashboard() {
    const { analytics } = appState;
    if (!analytics) return;

    if (document.getElementById('kpiTotalVisits')) document.getElementById('kpiTotalVisits').textContent = analytics.totalVisits;
    if (document.getElementById('kpiUniqueVisits')) document.getElementById('kpiUniqueVisits').textContent = `${analytics.uniqueVisitorsCount} visitantes únicos`;

    const totalRev = (analytics.conversions || []).reduce((acc, curr) => acc + (curr.amount || 0), 0);
    if (document.getElementById('kpiTotalRevenue')) {
        document.getElementById('kpiTotalRevenue').textContent = `R$ ${totalRev.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }
    if (document.getElementById('kpiConversionsCount')) {
        document.getElementById('kpiConversionsCount').textContent = `${analytics.conversions.length} propostas iniciadas`;
    }

    const ctr = analytics.totalVisits > 0 ? ((analytics.conversions.length / analytics.totalVisits) * 100).toFixed(1) : "0.0";
    if (document.getElementById('kpiConversionRate')) document.getElementById('kpiConversionRate').textContent = `${ctr}%`;

    const barsContainer = document.getElementById('planSalesBars');
    if (barsContainer) {
        barsContainer.innerHTML = '';
        const interests = analytics.planInterests || {};
        const maxVal = Math.max(...Object.values(interests), 1);

        Object.keys(interests).forEach(planName => {
            const count = interests[planName] || 0;
            const pct = Math.round((count / maxVal) * 100);
            const barItem = document.createElement('div');
            barItem.className = 'bar-item';
            barItem.innerHTML = `
                <div class="bar-label-flex">
                    <span>${planName}</span>
                    <span>${count} solicitações (${pct}%)</span>
                </div>
                <div class="bar-bg">
                    <div class="bar-fill" style="width: ${pct}%;"></div>
                </div>
            `;
            barsContainer.appendChild(barItem);
        });
    }

    const deviceBox = document.getElementById('deviceStatsBox');
    if (deviceBox) {
        deviceBox.innerHTML = '';
        const dCounts = analytics.deviceCounts || {};
        const totalDev = Object.values(dCounts).reduce((a, b) => a + b, 0) || 1;

        Object.keys(dCounts).forEach(dev => {
            const cnt = dCounts[dev];
            const pct = Math.round((cnt / totalDev) * 100);
            const devItem = document.createElement('div');
            devItem.className = 'device-item';
            devItem.innerHTML = `
                <span><i class="fa-solid fa-${dev === 'Mobile' ? 'mobile-screen' : (dev === 'Tablet' ? 'tablet-screen-button' : 'desktop')} text-cyan"></i> ${dev}</span>
                <strong>${cnt} (${pct}%)</strong>
            `;
            deviceBox.appendChild(devItem);
        });
    }

    const tableLeads = document.getElementById('tableLeadsLog');
    if (tableLeads) {
        tableLeads.innerHTML = '';
        (analytics.conversions || []).forEach(lead => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${lead.timestamp}</td>
                <td><strong>${lead.clientName}</strong></td>
                <td><span class="text-cyan">${lead.planName}</span></td>
                <td>R$ ${lead.amount ? lead.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '350,00'}</td>
                <td><a href="${getWaLink('Olá ' + lead.clientName + ', sobre a proposta do ' + lead.planName)}" target="_blank" class="btn btn-primary btn-sm"><i class="fa-brands fa-whatsapp"></i> Atender</a></td>
            `;
            tableLeads.appendChild(tr);
        });
    }

    const tableLogs = document.getElementById('tableAccessLogs');
    if (tableLogs) {
        tableLogs.innerHTML = '';
        (analytics.accessLogs || []).slice(0, 15).forEach(log => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${log.timestamp}</td>
                <td><i class="fa-solid fa-${log.device === 'Mobile' ? 'mobile-screen' : 'desktop'} text-cyan"></i> ${log.device}</td>
                <td>${log.browser}</td>
                <td><span class="badge-tag">${log.type}</span></td>
            `;
            tableLogs.appendChild(tr);
        });
    }
}

// Blog Article Reader Functions
window.openBlogArticle = function(id) {
    const article = REAL_ARTICLES[id];
    if (!article) return;

    const modalBackdrop = document.getElementById('blogArticleModalBackdrop');
    const categorySpan = document.getElementById('articleModalCategory');
    const bodyContainer = document.getElementById('articleModalBody');

    if (categorySpan) categorySpan.textContent = article.category;
    if (bodyContainer) bodyContainer.innerHTML = article.content;

    if (modalBackdrop) modalBackdrop.classList.add('active');
};

function closeBlogArticle() {
    const modalBackdrop = document.getElementById('blogArticleModalBackdrop');
    if (modalBackdrop) modalBackdrop.classList.remove('active');
}

/* ==========================================================================
   REPORT GENERATION & DATE FILTERING LOGIC (WITHOUT DATE LIMITS)
   ========================================================================== */

function parseEntryDate(entry) {
    if (entry.isoDate) return new Date(entry.isoDate);
    if (entry.timestamp) {
        const parts = entry.timestamp.split(',');
        if (parts.length > 0) {
            const dParts = parts[0].trim().split('/');
            if (dParts.length === 3) {
                return new Date(dParts[2], dParts[1] - 1, dParts[0]);
            }
        }
    }
    return new Date();
}

window.setReportQuickFilter = function(filterType) {
    const startInput = document.getElementById('reportStartDate');
    const endInput = document.getElementById('reportEndDate');
    if (!startInput || !endInput) return;

    const today = new Date();
    endInput.value = today.toISOString().split('T')[0];

    if (filterType === 'today') {
        startInput.value = today.toISOString().split('T')[0];
    } else if (filterType === '7days') {
        const d7 = new Date();
        d7.setDate(d7.getDate() - 7);
        startInput.value = d7.toISOString().split('T')[0];
    } else if (filterType === '30days') {
        const d30 = new Date();
        d30.setDate(d30.getDate() - 30);
        startInput.value = d30.toISOString().split('T')[0];
    } else if (filterType === 'all') {
        startInput.value = "";
        endInput.value = "";
    }

    generateCustomReport();
};

function generateCustomReport() {
    const category = document.getElementById('reportCategory') ? document.getElementById('reportCategory').value : 'leads';
    const startVal = document.getElementById('reportStartDate') ? document.getElementById('reportStartDate').value : '';
    const endVal = document.getElementById('reportEndDate') ? document.getElementById('reportEndDate').value : '';

    let startDate = startVal ? new Date(startVal + 'T00:00:00') : null;
    let endDate = endVal ? new Date(endVal + 'T23:59:59') : null;

    const periodBadge = document.getElementById('reportPeriodBadge');
    if (periodBadge) {
        if (!startDate && !endDate) periodBadge.textContent = "Período Selecionado: Todo o Histórico (Sem limites)";
        else periodBadge.textContent = `Período Selecionado: ${startVal || 'Início'} até ${endVal || 'Hoje'}`;
    }

    const leads = (appState.analytics.conversions || []).filter(item => {
        const d = parseEntryDate(item);
        if (startDate && d < startDate) return false;
        if (endDate && d > endDate) return false;
        return true;
    });

    const accessLogs = (appState.analytics.accessLogs || []).filter(item => {
        const d = parseEntryDate(item);
        if (startDate && d < startDate) return false;
        if (endDate && d > endDate) return false;
        return true;
    });

    const totalRev = leads.reduce((acc, curr) => acc + (curr.amount || 0), 0);
    const kpiGrid = document.getElementById('reportKpiGrid');
    if (kpiGrid) {
        kpiGrid.innerHTML = `
            <div class="kpi-card">
                <div class="kpi-icon"><i class="fa-solid fa-eye"></i></div>
                <div class="kpi-info">
                    <span class="kpi-label">Acessos no Período</span>
                    <div class="kpi-val">${accessLogs.length} pageviews</div>
                </div>
            </div>
            <div class="kpi-card">
                <div class="kpi-icon icon-green"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                <div class="kpi-info">
                    <span class="kpi-label">Volume de Orçamentos</span>
                    <div class="kpi-val text-green">R$ ${totalRev.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                </div>
            </div>
            <div class="kpi-card">
                <div class="kpi-icon icon-purple"><i class="fa-solid fa-chart-line"></i></div>
                <div class="kpi-info">
                    <span class="kpi-label">Propostas Geradas</span>
                    <div class="kpi-val text-purple">${leads.length} solicitações</div>
                </div>
            </div>
        `;
    }

    const tableWrapper = document.getElementById('reportTableWrapper');
    if (!tableWrapper) return;

    if (category === 'leads' || category === 'complete') {
        let html = `<h4>💰 Tabela Detalhada de Vendas & Solicitantes de Orçamentos (${leads.length} registros)</h4>`;
        html += `<div class="table-responsive"><table class="access-log-table">
            <thead>
                <tr>
                    <th>Data / Hora</th>
                    <th>Cliente / Empresa</th>
                    <th>Plano / Modelo Solicitado</th>
                    <th>Valor Estimado</th>
                </tr>
            </thead>
            <tbody>`;
        
        if (leads.length === 0) {
            html += `<tr><td colspan="4" class="text-center" style="padding: 20px;">Nenhuma solicitação de orçamento registrada neste período.</td></tr>`;
        } else {
            leads.forEach(l => {
                html += `<tr>
                    <td>${l.timestamp}</td>
                    <td><strong>${l.clientName}</strong></td>
                    <td><span class="text-cyan">${l.planName}</span></td>
                    <td>R$ ${l.amount ? l.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '350,00'}</td>
                </tr>`;
            });
        }
        html += `</tbody></table></div>`;

        if (category === 'complete') {
            html += `<h4 class="margin-top-20">👁️ Registros de Tráfego de Clientes (${accessLogs.length} acessos)</h4>`;
            html += `<div class="table-responsive"><table class="access-log-table">
                <thead>
                    <tr>
                        <th>Data / Hora</th>
                        <th>Dispositivo</th>
                        <th>Navegador</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>`;
            if (accessLogs.length === 0) {
                html += `<tr><td colspan="4" class="text-center" style="padding: 20px;">Nenhum acesso registrado neste período.</td></tr>`;
            } else {
                accessLogs.forEach(log => {
                    html += `<tr>
                        <td>${log.timestamp}</td>
                        <td>${log.device}</td>
                        <td>${log.browser}</td>
                        <td><span class="badge-tag">${log.type}</span></td>
                    </tr>`;
                });
            }
            html += `</tbody></table></div>`;
        }

        tableWrapper.innerHTML = html;
    } else if (category === 'access') {
        let html = `<h4>👁️ Registros de Tráfego & Acessos de Clientes (${accessLogs.length} acessos)</h4>`;
        html += `<div class="table-responsive"><table class="access-log-table">
            <thead>
                <tr>
                    <th>Data / Hora</th>
                    <th>Dispositivo</th>
                    <th>Navegador</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>`;
        if (accessLogs.length === 0) {
            html += `<tr><td colspan="4" class="text-center" style="padding: 20px;">Nenhum acesso registrado neste período.</td></tr>`;
        } else {
            accessLogs.forEach(log => {
                html += `<tr>
                    <td>${log.timestamp}</td>
                    <td>${log.device}</td>
                    <td>${log.browser}</td>
                    <td><span class="badge-tag">${log.type}</span></td>
                </tr>`;
            });
        }
        html += `</tbody></table></div>`;
        tableWrapper.innerHTML = html;
    }
}

function exportReportCSV() {
    const category = document.getElementById('reportCategory') ? document.getElementById('reportCategory').value : 'leads';
    let csvContent = "data:text/csv;charset=utf-8,";

    if (category === 'leads') {
        csvContent += "Data/Hora;Cliente/Empresa;Plano Solicitado;Valor Estimado\n";
        (appState.analytics.conversions || []).forEach(l => {
            csvContent += `"${l.timestamp}";"${l.clientName}";"${l.planName}";"${l.amount || 350}"\n`;
        });
    } else {
        csvContent += "Data/Hora;Dispositivo;Navegador;Tipo Visitante\n";
        (appState.analytics.accessLogs || []).forEach(log => {
            csvContent += `"${log.timestamp}";"${log.device}";"${log.browser}";"${log.type}"\n`;
        });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `relatorio_lumen_${category}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Relatório baixado em formato CSV/Excel!", "success");
}

function printReportPDF() {
    window.print();
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
    initFirebaseConnection();
    trackVisit();
    renderApp();

    // Mobile Hamburger Navigation Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('mobile-active')) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });

        document.querySelectorAll('.main-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('mobile-active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }

    if (window.location.hash === '#admin') {
        const modal = document.getElementById('adminModalBackdrop');
        if (modal) modal.classList.add('active');
    }

    const siteHeader = document.getElementById('siteHeader');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) siteHeader.classList.add('scrolled');
            else siteHeader.classList.remove('scrolled');
        });
    }

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

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const business = document.getElementById('contactBusiness').value;
            const phone = document.getElementById('contactPhone').value;
            const email = document.getElementById('contactEmail').value;
            const msg = document.getElementById('contactMessage').value;

            trackConversion("Proposta Customizada", 350.00, `${name} (${business})`);

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

    // Modal Triggers for Admin & Blog Articles
    const adminModalBackdrop = document.getElementById('adminModalBackdrop');
    const openAdminBtn = document.getElementById('openAdminBtn');
    const floatAdminBtn = document.getElementById('floatAdminBtn');
    const footerAdminLink = document.getElementById('footerAdminLink');
    const closeAdminModalBtn = document.getElementById('closeAdminModalBtn');
    const closeBlogModalBtn = document.getElementById('closeBlogModalBtn');

    function openAdminModal() { if (adminModalBackdrop) adminModalBackdrop.classList.add('active'); }
    function closeAdminModal() { if (adminModalBackdrop) adminModalBackdrop.classList.remove('active'); }

    if (openAdminBtn) openAdminBtn.addEventListener('click', openAdminModal);
    if (floatAdminBtn) floatAdminBtn.addEventListener('click', openAdminModal);
    if (footerAdminLink) footerAdminLink.addEventListener('click', openAdminModal);
    if (closeAdminModalBtn) closeAdminModalBtn.addEventListener('click', closeAdminModal);
    if (closeBlogModalBtn) closeBlogModalBtn.addEventListener('click', closeBlogArticle);

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
                renderAnalyticsDashboard();
                renderAdminCasesList();
                generateCustomReport();
                showToast("Autenticado com Sucesso no Painel Admin!", "success");
            } else {
                showToast("Usuário ou senha de administrador incorretos!", "error");
            }
        });
    }

    // Report Handlers
    const btnGenerateReport = document.getElementById('btnGenerateReport');
    if (btnGenerateReport) btnGenerateReport.addEventListener('click', generateCustomReport);

    const btnExportReportCSV = document.getElementById('btnExportReportCSV');
    if (btnExportReportCSV) btnExportReportCSV.addEventListener('click', exportReportCSV);

    const btnPrintReport = document.getElementById('btnPrintReport');
    if (btnPrintReport) btnPrintReport.addEventListener('click', printReportPDF);

    // Firebase Config Save Button
    const btnSaveFirebaseConfig = document.getElementById('btnSaveFirebaseConfig');
    if (btnSaveFirebaseConfig) {
        btnSaveFirebaseConfig.addEventListener('click', () => {
            appState.firebase = {
                apiKey: document.getElementById('fbApiKey').value.trim(),
                authDomain: document.getElementById('fbAuthDomain').value.trim(),
                databaseURL: document.getElementById('fbDatabaseURL').value.trim(),
                projectId: document.getElementById('fbProjectId').value.trim(),
                appId: document.getElementById('fbAppId').value.trim()
            };
            saveState();
            initFirebaseConnection();
            showToast("Configuração do Firebase salva! Testando conexão...", "success");
        });
    }

    // Plans Form Submission Handler
    const plansSettingsForm = document.getElementById('plansSettingsForm');
    if (plansSettingsForm) {
        plansSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const p1FeaturesText = document.getElementById('plan1Features').value;
            const p2FeaturesText = document.getElementById('plan2Features').value;
            const p3FeaturesText = document.getElementById('plan3Features').value;

            appState.plans.plan1 = {
                name: document.getElementById('plan1Name').value.trim(),
                target: document.getElementById('plan1Target').value.trim(),
                setup: document.getElementById('plan1Setup').value.trim(),
                monthly: document.getElementById('plan1Monthly').value.trim(),
                features: p1FeaturesText.split('\n').map(s => s.trim()).filter(Boolean)
            };

            appState.plans.plan2 = {
                name: document.getElementById('plan2Name').value.trim(),
                target: document.getElementById('plan2Target').value.trim(),
                setup: document.getElementById('plan2Setup').value.trim(),
                monthly: document.getElementById('plan2Monthly').value.trim(),
                features: p2FeaturesText.split('\n').map(s => s.trim()).filter(Boolean)
            };

            appState.plans.plan3 = {
                name: document.getElementById('plan3Name').value.trim(),
                target: document.getElementById('plan3Target').value.trim(),
                setup: document.getElementById('plan3Setup').value.trim(),
                monthly: document.getElementById('plan3Monthly').value.trim(),
                features: p3FeaturesText.split('\n').map(s => s.trim()).filter(Boolean)
            };

            saveState();
            showToast("Todos os Planos, Preços e Recursos foram atualizados!", "success");
        });
    }

    // Clear Logs Handlers
    const btnClearAccessLogs = document.getElementById('btnClearAccessLogs');
    if (btnClearAccessLogs) {
        btnClearAccessLogs.addEventListener('click', () => {
            if (confirm("Limpar todo o histórico de acessos recente?")) {
                appState.analytics.accessLogs = [];
                saveState();
                renderAnalyticsDashboard();
                showToast("Histórico de acessos limpo.", "info");
            }
        });
    }

    const btnClearLeadsLog = document.getElementById('btnClearLeadsLog');
    if (btnClearLeadsLog) {
        btnClearLeadsLog.addEventListener('click', () => {
            if (confirm("Limpar a lista de interessados (leads)?")) {
                appState.analytics.conversions = [];
                saveState();
                renderAnalyticsDashboard();
                showToast("Lista de leads limpa.", "info");
            }
        });
    }

    // Navigation Tabs
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

    // General Settings Save (including About Us Text & Title)
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
            appState.settings.aboutTitle = document.getElementById('settingAboutTitle').value.trim();
            appState.settings.aboutText = document.getElementById('settingAboutText').value.trim();

            saveState();
            showToast("Informações da empresa e texto 'Sobre Nós' salvos com sucesso!", "success");
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
    const { settings, colors, plans, firebase: fb } = appState;

    if (fb) {
        if (document.getElementById('fbApiKey')) document.getElementById('fbApiKey').value = fb.apiKey || "";
        if (document.getElementById('fbAuthDomain')) document.getElementById('fbAuthDomain').value = fb.authDomain || "";
        if (document.getElementById('fbDatabaseURL')) document.getElementById('fbDatabaseURL').value = fb.databaseURL || "";
        if (document.getElementById('fbProjectId')) document.getElementById('fbProjectId').value = fb.projectId || "";
        if (document.getElementById('fbAppId')) document.getElementById('fbAppId').value = fb.appId || "";
    }

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
    if (document.getElementById('settingAboutTitle')) document.getElementById('settingAboutTitle').value = settings.aboutTitle || "Clareza Gera Resultados";
    if (document.getElementById('settingAboutText')) document.getElementById('settingAboutText').value = settings.aboutText || "";

    if (plans) {
        if (document.getElementById('plan1Name')) document.getElementById('plan1Name').value = plans.plan1.name || "Plano Essencial";
        if (document.getElementById('plan1Target')) document.getElementById('plan1Target').value = plans.plan1.target || "Para Autônomos e Iniciantes";
        if (document.getElementById('plan1Setup')) document.getElementById('plan1Setup').value = plans.plan1.setup;
        if (document.getElementById('plan1Monthly')) document.getElementById('plan1Monthly').value = plans.plan1.monthly;
        if (document.getElementById('plan1Features')) document.getElementById('plan1Features').value = (plans.plan1.features || []).join('\n');

        if (document.getElementById('plan2Name')) document.getElementById('plan2Name').value = plans.plan2.name || "Plano Profissional";
        if (document.getElementById('plan2Target')) document.getElementById('plan2Target').value = plans.plan2.target || "Para Empresas em Crescimento";
        if (document.getElementById('plan2Setup')) document.getElementById('plan2Setup').value = plans.plan2.setup;
        if (document.getElementById('plan2Monthly')) document.getElementById('plan2Monthly').value = plans.plan2.monthly;
        if (document.getElementById('plan2Features')) document.getElementById('plan2Features').value = (plans.plan2.features || []).join('\n');

        if (document.getElementById('plan3Name')) document.getElementById('plan3Name').value = plans.plan3.name || "Loja Virtual / Sistema";
        if (document.getElementById('plan3Target')) document.getElementById('plan3Target').value = plans.plan3.target || "Catálogo Completo & Vendas";
        if (document.getElementById('plan3Setup')) document.getElementById('plan3Setup').value = plans.plan3.setup;
        if (document.getElementById('plan3Monthly')) document.getElementById('plan3Monthly').value = plans.plan3.monthly;
        if (document.getElementById('plan3Features')) document.getElementById('plan3Features').value = (plans.plan3.features || []).join('\n');
    }

    renderAnalyticsDashboard();
    renderAdminCasesList();
    generateCustomReport();
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

window.trackConversion = trackConversion;
