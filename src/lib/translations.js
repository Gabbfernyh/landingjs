import { useState, useEffect } from 'react'

const translations = {
    pt: {
        // Header
        navHome: 'Home',
        navAbout: 'Sobre',
        navServices: 'Serviços',
        navProjects: 'Projetos',
        navTestimonials: 'Depoimentos',
        navContact: 'Contato',

        // Hero
        heroSubtitle: 'Bem-vindo à',
        heroTitle: 'Soluções Tecnológicas',
        heroDescription: 'Transformamos ideias em realidade digital. Criamos soluções tecnológicas inovadoras que impulsionam o crescimento do seu negócio com excelência e segurança.',
        heroButton: 'Solicitar Orçamento',

        // About
        aboutTitle: 'Sobre a Gabbfernyh ST',
        aboutSubtitle: 'Inovação, Qualidade e Excelência em Soluções Tecnológicas',
        missionTitle: 'Nossa Missão',
        missionDesc: 'Transformar ideias em soluções tecnológicas inovadoras, oferecendo serviços de excelência que impulsionam o crescimento e a transformação digital de nossos clientes. Comprometidos em entregar qualidade, segurança e inovação contínua.',
        visionTitle: 'Nossa Visão',
        visionDesc: 'Ser referência em soluções tecnológicas no mercado, reconhecida pela qualidade, inovação e satisfação dos clientes. Buscamos ser parceiros confiáveis na jornada digital de cada negócio, criando impacto positivo e valor duradouro.',
        statsProjects: 'Projetos Realizados',
        statsClients: 'Satisfação de Clientes',
        statsSupport: '24/7 Suporte Disponível',

        // Services
        servicesTitle: 'Nossos Serviços',
        servicesSubtitle: 'O que oferecemos',
        webDevTitle: 'Desenvolvimento Web Responsivo',
        webDevDesc: 'Criamos sites modernos, rápidos e acessíveis que transformam sua visão em realidade digital. Cada projeto é otimizado para performance máxima e conversão.',
        webDev1: 'Design Responsivo: Experiência perfeita em todos os dispositivos',
        webDev2: 'Otimização SEO: Melhor visibilidade nos motores de busca',
        webDev3: 'Segurança Premium: Proteção de dados e certificados SSL',
        webDev4: 'Manutenção Contínua: Suporte técnico e atualizações regulares',
        
        designTitle: 'Design e Identidade Visual',
        designDesc: 'Desenvolvemos identidades visuais memoráveis que comunicam os valores da sua marca com elegância e impacto. Do conceito à implementação, criamos soluções de design estratégico.',
        design1: 'Branding Estratégico: Logotipos e identidade visual coerentes',
        design2: 'Design Gráfico: Materiais criativos e profissionais',
        design3: 'UI/UX Design: Interfaces intuitivas e centradas no usuário',
        design4: 'Guia de Marca: Padrões visuais consistentes',
        
        supportTitle: 'Suporte Técnico Especializado',
        supportDesc: 'Mantemos sua infraestrutura tecnológica funcionando perfeitamente com suporte proativo, diagnóstico rápido e soluções eficientes para minimizar tempo de inatividade.',
        support1: 'Manutenção Preventiva: Diagnóstico e otimização contínua',
        support2: 'Suporte Técnico 24/7: Atendimento rápido e eficiente',
        support3: 'Instalação de Software: Configuração e licenciamento',
        support4: 'Recuperação de Dados: Backup e segurança de informações',

        // Technologies
        technologiesTitle: 'Tecnologias que Utilizamos',
        technologiesSubtitle: 'Ferramentas e tecnologias modernas para soluções robustas e escaláveis',
        exploreTech: 'Conheça as tecnologias',
        closeModal: 'Fechar',

        // Projects
        projectsTitle: 'Nossos Projetos',
        projectsSubtitle: 'Conheça alguns de nossos trabalhos destacados',

        // Testimonials
        testimonialTitle: 'O que Nossos Clientes Dizem',
        testimonialSubtitle: 'Depoimentos de satisfação e confiança',

        // FAQ
        faqTitle: 'Perguntas Frequentes',
        faqSubtitle: 'Encontre respostas para suas dúvidas e curiosidades',

        // Buttons
        btnStartNow: 'Começar Agora',
        btnLearnMore: 'Saiba Mais',

        // Contact
        contactTitle: 'Entre em Contato',
        contactSubtitle: 'Vamos transformar sua ideia em realidade',
        contactName: 'Seu Nome',
        contactEmail: 'Seu Email',
        contactSubjectPlaceholder: 'Assunto',
        contactMessagePlaceholder: 'Sua Mensagem',
        contactButton: 'Enviar Mensagem',

        // Projects
        project1Title: 'E-commerce Premium',
        project1Desc: 'Plataforma de vendas com integração de pagamentos, catálogo dinâmico e painel administrativo completo.',
        project2Title: 'Dashboard Analítico',
        project2Desc: 'Sistema de monitoramento em tempo real com gráficos interativos, relatórios personalizados e exportação de dados.',
        project3Title: 'App Mobile Inovador',
        project3Desc: 'Aplicativo multiplataforma com funcionalidades avançadas, design moderno e excelente experiência do usuário.',
        viewProject: 'Ver Projeto',

        // Testimonials
        testimonial1: '"A Gabbfernyh transformou completamente minha presença online. Profissionais dedicados, prazos cumpridos e resultado além das expectativas!"',
        testimonial1Author: 'Maria Silva',
        testimonial1Title: 'CEO - Tech Solutions',
        testimonial2: '"Excelente atendimento! A equipe entendeu perfeitamente nossas necessidades e entregou um site que superou todos os objetivos."',
        testimonial2Author: 'João Santos',
        testimonial2Title: 'Diretor - Consultoria XYZ',
        testimonial3: '"Recomendo fortemente a Gabbfernyh. Fizeram um trabalho impecável com comunicação clara e suporte excepcional."',
        testimonial3Author: 'Ana Costa',
        testimonial3Title: 'Proprietária - E-commerce',

        // FAQ
        faq1Q: 'Por que nos contratar?',
        faq1A: 'Somos uma empresa specializada em soluções tecnológicas inovadoras com mais de 50 projetos realizados. Oferecemos qualidade garantida, equipe experiente, suporte 24/7 e entrega no prazo. Nosso compromisso é transformar sua ideia em realidade com excelência e segurança, proporcionando ROI máximo para seu negócio.',
        faq2Q: 'Qual é o nosso processo de trabalho?',
        faq2A: 'Nosso processo começa com uma reunião inicial para entender seus objetivos e necessidades. Em seguida, fazemos uma análise detalhada, criamos um plano de ação com timeline e milestones. Desenvolvemos em sprints, mantendo comunicação constante com você, e realizamos testes rigorosos antes da entrega final.',
        faq3Q: 'Quais tecnologias você utiliza?',
        faq3A: 'Utilizamos as tecnologias mais modernas e escaláveis do mercado: React para frontend, Node.js e Express para backend, MongoDB para bancos de dados, TypeScript para segurança de tipos, e ferramentas como Git e REST APIs para integração e versionamento. Escolhemos a melhor stack para cada projeto.',
        faq4Q: 'Quanto tempo leva para desenvolver um projeto?',
        faq4A: 'O timeline depende da complexidade do projeto. Projetos pequenos (landing pages, sites informativos) levam 2-4 semanas. Projetos médios (e-commerce, portais) levam 4-12 semanas. Projetos complexos (plataformas personalizadas, sistemas escaláveis) podem variar. Fornecemos um cronograma detalhado durante o planejamento.',
        faq5Q: 'Vocês oferecem suporte após a entrega?',
        faq5A: 'Sim! Oferecemos pacotes de suporte pós-entrega que incluem manutenção, correção de bugs, atualizações de segurança e melhorias. Disponibilizamos suporte 24/7 conforme o contrato, e você pode optar por suporte contínuo ou sob demanda.',
        faq6Q: 'Como é feito o pagamento?',
        faq6A: 'Oferecemos modelos de pagamento flexíveis: pagamento total antecipado com desconto, pagamento em parcelas (50% no início, 50% na entrega), ou pagamento por sprint. Elaboramos propostas personalizadas e transparentes sem custos ocultos.',
        faq7Q: 'Vocês trabalham com empresas de todos os tamanhos?',
        faq7A: 'Absolutamente! Trabalhamos com startups, pequenas empresas, médias empresas e grandes corporações. Adaptamos nossas soluções e processos para atender qualquer tamanho de negócio e orçamento. Cada projeto recebe atenção e dedicação independentemente do seu porte.',
        faq8Q: 'Como começar um projeto com vocês?',
        faq8A: 'É simples! Basta clicar em \'Começar Agora\' ou preencher nosso formulário de contato. Agende uma consulta gratuita onde discutiremos suas necessidades, objetivos e expectativas. Após isso, elaboramos uma proposta detalhada e começamos o desenvolvimento assim que aprovado.',

        // Footer
        footerBrandSubtitle: 'Soluções Tecnológicas',
        footerDescription: 'Transformamos ideias em realidade digital, criando soluções inovadoras para o crescimento do seu negócio.',
        footerSocialTitle: 'Redes Sociais',
        footerText: 'Todos os direitos reservados.'
    },
    en: {
        // Header
        navHome: 'Home',
        navAbout: 'About',
        navServices: 'Services',
        navProjects: 'Projects',
        navTestimonials: 'Testimonials',
        navContact: 'Contact',

        // Hero
        heroSubtitle: 'Welcome to',
        heroTitle: 'Technological Solutions',
        heroDescription: 'We transform ideas into digital reality. We create innovative technological solutions that drive your business growth with excellence and security.',
        heroButton: 'Request a Quote',



        // About
        aboutTitle: 'About Gabbfernyh ST',
        aboutSubtitle: 'Innovation, Quality and Excellence in Technological Solutions',
        missionTitle: 'Our Mission',
        missionDesc: 'Transform ideas into innovative technological solutions, offering excellent services that drive growth and digital transformation of our clients. Committed to delivering quality, security and continuous innovation.',
        visionTitle: 'Our Vision',
        visionDesc: 'To be a reference in technological solutions in the market, recognized for quality, innovation and customer satisfaction. We seek to be reliable partners in the digital journey of each business, creating positive impact and lasting value.',
        statsProjects: 'Projects Completed',
        statsClients: 'Client Satisfaction',
        statsSupport: '24/7 Support Available',

        // Services
        servicesTitle: 'Our Services',
        servicesSubtitle: 'What we offer',
        webDevTitle: 'Responsive Web Development',
        webDevDesc: 'We create modern, fast and accessible websites that transform your vision into digital reality. Each project is optimized for maximum performance and conversion.',
        webDev1: 'Responsive Design: Perfect experience on all devices',
        webDev2: 'SEO Optimization: Better visibility in search engines',
        webDev3: 'Premium Security: Data protection and SSL certificates',
        webDev4: 'Continuous Maintenance: Technical support and regular updates',
        
        designTitle: 'Design and Visual Identity',
        designDesc: 'We develop memorable visual identities that communicate your brand\'s values with elegance and impact. From concept to implementation, we create strategic design solutions.',
        design1: 'Strategic Branding: Consistent logos and visual identity',
        design2: 'Graphic Design: Creative and professional materials',
        design3: 'UI/UX Design: Intuitive and user-centered interfaces',
        design4: 'Brand Guide: Consistent visual patterns',
        
        supportTitle: 'Specialized Technical Support',
        supportDesc: 'We keep your technological infrastructure running perfectly with proactive support, quick diagnostics and efficient solutions to minimize downtime.',
        support1: 'Preventive Maintenance: Continuous diagnosis and optimization',
        support2: '24/7 Technical Support: Fast and efficient service',
        support3: 'Software Installation: Configuration and licensing',
        support4: 'Data Recovery: Backup and information security',

        // Technologies
        technologiesTitle: 'Technologies We Use',
        technologiesSubtitle: 'Modern tools and technologies for robust and scalable solutions',
        exploreTech: 'Explore technologies',
        closeModal: 'Close',

        // Projects
        projectsTitle: 'Our Projects',
        projectsSubtitle: 'Check out some of our featured work',

        // Testimonials
        testimonialTitle: 'What Our Clients Say',
        testimonialSubtitle: 'Testimonials of satisfaction and trust',

        // FAQ
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Find answers to your questions and curiosities',

        // Contact
        contactTitle: 'Get in Touch',
        contactSubtitle: 'Let\'s transform your idea into reality',
        contactName: 'Your Name',
        contactEmail: 'Your Email',
        contactSubjectPlaceholder: 'Subject',
        contactMessagePlaceholder: 'Your Message',
        contactButton: 'Send Message',

        // Buttons
        btnStartNow: 'Start Now',
        btnLearnMore: 'Learn More',

        // Projects
        project1Title: 'Premium E-commerce',
        project1Desc: 'Sales platform with payment integration, dynamic catalog and complete admin panel.',
        project2Title: 'Analytical Dashboard',
        project2Desc: 'Real-time monitoring system with interactive charts, customized reports and data export.',
        project3Title: 'Innovative Mobile App',
        project3Desc: 'Cross-platform application with advanced features, modern design and excellent user experience.',
        viewProject: 'View Project',

        // Testimonials
        testimonial1: '"Gabbfernyh completely transformed my online presence. Dedicated professionals, met deadlines and results beyond expectations!"',
        testimonial1Author: 'Maria Silva',
        testimonial1Title: 'CEO - Tech Solutions',
        testimonial2: '"Excellent service! The team perfectly understood our needs and delivered a website that exceeded all goals."',
        testimonial2Author: 'John Santos',
        testimonial2Title: 'Director - XYZ Consulting',
        testimonial3: '"I highly recommend Gabbfernyh. They did impeccable work with clear communication and exceptional support."',
        testimonial3Author: 'Anna Costa',
        testimonial3Title: 'Owner - E-commerce',

        // FAQ
        faq1Q: 'Why hire us?',
        faq1A: 'We are a company specializing in innovative technological solutions with over 50 completed projects. We offer guaranteed quality, experienced team, 24/7 support and on-time delivery. Our commitment is to transform your idea into reality with excellence and security, providing maximum ROI for your business.',
        faq2Q: 'What is our work process?',
        faq2A: 'Our process starts with an initial meeting to understand your goals and needs. Then we perform a detailed analysis, create an action plan with timeline and milestones. We develop in sprints, maintaining constant communication with you, and perform rigorous testing before final delivery.',
        faq3Q: 'What technologies do you use?',
        faq3A: 'We use the most modern and scalable technologies on the market: React for frontend, Node.js and Express for backend, MongoDB for databases, TypeScript for type safety, and tools like Git and REST APIs for integration and versioning. We choose the best stack for each project.',
        faq4Q: 'How long does it take to develop a project?',
        faq4A: 'The timeline depends on project complexity. Small projects (landing pages, informational websites) take 2-4 weeks. Medium projects (e-commerce, portals) take 4-12 weeks. Complex projects (custom platforms, scalable systems) may vary. We provide a detailed schedule during planning.',
        faq5Q: 'Do you offer support after delivery?',
        faq5A: 'Yes! We offer post-delivery support packages that include maintenance, bug fixes, security updates and improvements. We provide 24/7 support according to the contract, and you can choose continuous or on-demand support.',
        faq6Q: 'How is payment handled?',
        faq6A: 'We offer flexible payment models: full upfront payment with discount, installment payments (50% upfront, 50% on delivery), or sprint-based payment. We prepare personalized and transparent proposals with no hidden costs.',
        faq7Q: 'Do you work with companies of all sizes?',
        faq7A: 'Absolutely! We work with startups, small businesses, medium companies and large corporations. We adapt our solutions and processes to serve any business size and budget. Each project receives attention and dedication regardless of its size.',
        faq8Q: 'How do I start a project with you?',
        faq8A: 'It\'s simple! Just click on \'Start Now\' or fill out our contact form. Schedule a free consultation where we\'ll discuss your needs, goals and expectations. After that, we develop a detailed proposal and start development once approved.',

        // Footer
        footerBrandSubtitle: 'Technological Solutions',
        footerDescription: 'We transform ideas into digital reality, creating innovative solutions for your business growth.',
        footerSocialTitle: 'Social Networks',
        footerText: 'All rights reserved.'
    }
}

export function useLanguage() {
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'pt')

    useEffect(() => {
        // Listen for language changes from ThemeToggle
        const handleLanguageChange = (event) => {
            setLanguage(event.detail.language)
        }

        window.addEventListener('languageChanged', handleLanguageChange)
        return () => window.removeEventListener('languageChanged', handleLanguageChange)
    }, [])

    const t = (key) => {
        return translations[language]?.[key] || translations['pt'][key] || key
    }

    return { language, t }
}

export default translations
