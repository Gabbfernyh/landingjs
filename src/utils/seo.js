/**
 * SEO Configuration & Utilities
 * Arquivo centralizador para otimização SEO
 * Inclui: meta tags, structured data, sitemap, robots.txt
 */

export const SEO_CONFIG = {
    // Informações básicas do site
    site: {
        name: 'Gabbfernyh Soluções Tecnológicas',
        shortName: 'Gabbfernyh',
        description: 'Transformamos ideias em realidade digital. Criamos soluções tecnológicas inovadoras que impulsionam o crescimento do seu negócio com excelência e segurança.',
        url: 'https://gabbfernyh.com',
        logo: 'https://gabbfernyh.com/logo.png',
        favicon: '/src/assets/icon/faviconBlue.svg',
        language: 'pt-BR',
        locale: 'pt_BR',
    },

    // Dados para redes sociais
    social: {
        facebook: 'https://facebook.com/gabbfernyh',
        instagram: 'https://instagram.com/gabbfernyh',
        linkedin: 'https://linkedin.com/company/gabbfernyh',
        twitter: 'https://twitter.com/gabbfernyh',
        github: 'https://github.com/gabbfernyh',
    },

    // Meta tags padrão
    defaultMeta: {
        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
        charset: 'UTF-8',
        language: 'pt-BR',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        googleSiteVerification: '', // Adicionar seu código de verificação
        theme_color: '#0f172a',
        color_scheme: 'dark light',
    },

    // Keywords por página
    pages: {
        home: {
            title: 'Gabbfernyh | Soluções Tecnológicas Inovadoras',
            description: 'Desenvolvimento web, apps e soluções digitais. +50 projetos entregues com excelência. Transformamos ideias em realidade digital.',
            keywords: 'soluções tecnológicas, desenvolvimento web, apps, digital, inovação, software, tecnologia',
            canonical: 'https://gabbfernyh.com',
        },
        about: {
            title: 'Sobre a Gabbfernyh | Quem Somos',
            description: 'Conheça a história da Gabbfernyh, nossa missão, valores e equipe de especialistas em tecnologia.',
            keywords: 'sobre, empresa, equipe, missão, valores, tecnologia, inovação',
            canonical: 'https://gabbfernyh.com/#about',
        },
        services: {
            title: 'Serviços | Soluções de Tecnologia',
            description: 'Desenvolvimento de websites, aplicações mobile, consultoria digital e mais. Soluções personalizadas para seu negócio.',
            keywords: 'serviços, desenvolvimento, websites, apps, consultoria, soluções',
            canonical: 'https://gabbfernyh.com/#services',
        },
        projects: {
            title: 'Portfólio | Projetos Realizados',
            description: 'Conheça os projetos que desenvolvemos. Casos de sucesso em web, mobile e consultoria.',
            keywords: 'portfólio, projetos, cases, desenvolvimento, web, mobile, sucesso',
            canonical: 'https://gabbfernyh.com/#projects',
        },
        contact: {
            title: 'Contato | Fale com a Gabbfernyh',
            description: 'Entre em contato conosco. Estamos prontos para transformar sua ideia em realidade digital.',
            keywords: 'contato, email, telefone, localização, suporte, atendimento',
            canonical: 'https://gabbfernyh.com/#contact',
        },
    },

    // Schema.org Structured Data
    structuredData: {
        // Organization Schema
        organization: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Gabbfernyh Soluções Tecnológicas',
            'url': 'https://gabbfernyh.com',
            'logo': 'https://gabbfernyh.com/logo.png',
            'description': 'Transformamos ideias em realidade digital com soluções tecnológicas inovadoras',
            'sameAs': [
                'https://facebook.com/gabbfernyh',
                'https://instagram.com/gabbfernyh',
                'https://linkedin.com/company/gabbfernyh',
                'https://twitter.com/gabbfernyh',
                'https://github.com/gabbfernyh',
            ],
            'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'Customer Support',
                'telephone': '+55-XX-XXXX-XXXX',
                'email': 'contato@gabbfernyh.com',
                'areaServed': 'BR',
                'availableLanguage': 'pt-BR',
            },
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Rua Exemplo, 123',
                'addressLocality': 'Cidade',
                'addressRegion': 'SP',
                'postalCode': '01234-567',
                'addressCountry': 'BR',
            },
        },

        // Service Schema
        service: {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Gabbfernyh Soluções Tecnológicas',
            'image': 'https://gabbfernyh.com/logo.png',
            'description': 'Soluções tecnológicas personalizadas para seu negócio',
            'url': 'https://gabbfernyh.com',
            'telephone': '+55-XX-XXXX-XXXX',
            'email': 'contato@gabbfernyh.com',
            'priceRange': '$$',
            'areaServed': 'BR',
        },

        // FAQPage Schema
        faq: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
                {
                    '@type': 'Question',
                    'name': 'Qual é o tempo de entrega de um projeto?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'O tempo varia conforme a complexidade. Projetos simples: 2-4 semanas. Projetos complexos: 2-3 meses.',
                    },
                },
                {
                    '@type': 'Question',
                    'name': 'Vocês oferecem suporte pós-projeto?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Sim! Oferecemos suporte 24/7 para todos os clientes. Manutenção, atualizações e correções incluídas.',
                    },
                },
                {
                    '@type': 'Question',
                    'name': 'Como vocês cobram pelos serviços?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Oferecemos diferentes modelos: projeto fixo, time dedicado ou hora. Tudo personalizado para sua necessidade.',
                    },
                },
            ],
        },

        // BreadcrumbList Schema
        breadcrumb: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://gabbfernyh.com',
                },
                {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Serviços',
                    'item': 'https://gabbfernyh.com/#services',
                },
            ],
        },
    },

    // Open Graph (Facebook, LinkedIn, etc)
    openGraph: {
        type: 'website',
        image: 'https://gabbfernyh.com/og-image.png',
        imageWidth: 1200,
        imageHeight: 630,
        imageType: 'image/png',
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        handle: '@gabbfernyh',
        creator: '@gabbfernyh',
    },
};

/**
 * Função para gerar meta tags dinamicamente
 */
export const generateMetaTags = (page = 'home') => {
    const pageData = SEO_CONFIG.pages[page] || SEO_CONFIG.pages.home;

    return {
        title: pageData.title,
        description: pageData.description,
        keywords: pageData.keywords,
        canonical: pageData.canonical,
        ogTitle: pageData.title,
        ogDescription: pageData.description,
        ogImage: SEO_CONFIG.openGraph.image,
        ogUrl: pageData.canonical,
        twitterTitle: pageData.title,
        twitterDescription: pageData.description,
        twitterImage: SEO_CONFIG.openGraph.image,
    };
};

/**
 * Função para injetan JSON-LD no head
 */
export const injectStructuredData = (data) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
};

/**
 * Função para atualizar document.title
 */
export const updatePageTitle = (title) => {
    document.title = title;
};

/**
 * Função para atualizar meta description
 */
export const updateMetaDescription = (description) => {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
};

/**
 * Função para atualizar Open Graph tags
 */
export const updateOpenGraph = (property, content) => {
    let metaTag = document.querySelector(`meta[property="og:${property}"]`);
    if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', `og:${property}`);
        document.head.appendChild(metaTag);
    }
    metaTag.content = content;
};

/**
 * Hook customizado para SEO (para usar em componentes React)
 */
export const useSEO = (page = 'home') => {
    const metaTags = generateMetaTags(page);

    // Atualizar no mount
    if (typeof window !== 'undefined') {
        updatePageTitle(metaTags.title);
        updateMetaDescription(metaTags.description);
        updateOpenGraph('title', metaTags.ogTitle);
        updateOpenGraph('description', metaTags.ogDescription);
        updateOpenGraph('image', metaTags.ogImage);
        updateOpenGraph('url', metaTags.ogUrl);

        // Injetar structured data
        injectStructuredData(SEO_CONFIG.structuredData.organization);
    }

    return metaTags;
};

/**
 * Sitemap data
 */
export const SITEMAP = [
    {
        url: 'https://gabbfernyh.com',
        changefreq: 'weekly',
        priority: 1.0,
    },
    {
        url: 'https://gabbfernyh.com/#about',
        changefreq: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://gabbfernyh.com/#services',
        changefreq: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://gabbfernyh.com/#projects',
        changefreq: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://gabbfernyh.com/#contact',
        changefreq: 'monthly',
        priority: 0.7,
    },
];

/**
 * Robots.txt content
 */
export const ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /private

Sitemap: https://gabbfernyh.com/sitemap.xml

# Crawl delay (em segundos)
Crawl-delay: 1

# Cache control
# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1`;

export default SEO_CONFIG;
