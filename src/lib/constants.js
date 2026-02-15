/**
 * Dados e configurações globais do projeto
 */

// Informações da empresa
export const COMPANY = {
    name: 'Gabbfernyh ST',
    tagline: 'Soluções em Tecnologia',
    description: 'Transformando ideias em inovação digital'
}

// Navegação principal
export const NAV_LINKS = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projetos' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#contact', label: 'Contact' }
]

// Sobre a empresa
export const ABOUT_ITEMS = [
    {
        id: 1,
        title: 'Inovação',
        description: 'Soluções tecnológicas criativas e escaláveis para seu negócio'
    },
    {
        id: 2,
        title: 'Qualidade',
        description: 'Padrão de excelência em cada projeto que desenvolvemos'
    },
    {
        id: 3,
        title: 'Experiência',
        description: 'Anos de expertise em desenvolvimento web e mobile'
    }
]

// Serviços
export const SERVICES = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Desenvolvemos aplicações web modernas e responsivas.',
        icon: '🚀',
        points: [
            'React, Vue e Angular',
            'Node.js e Express',
            'Banco de dados escalável',
            'Deploy automático'
        ]
    },
    {
        id: 2,
        title: 'Mobile Apps',
        description: 'Apps nativos e cross-platform de alta qualidade.',
        icon: '📱',
        points: [
            'React Native e Flutter',
            'iOS e Android',
            'Integração com APIs',
            'Push notifications'
        ]
    },
    {
        id: 3,
        title: 'Consultoria',
        description: 'Orientação estratégica em tecnologia e transformação digital.',
        icon: '💡',
        points: [
            'Arquitetura de sistemas',
            'Code review e mentoring',
            'DevOps e CI/CD',
            'Segurança da informação'
        ]
    }
]

// Projetos
export const PROJECTS = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Plataforma de vendas online com pagamento integrado.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        image: '🛒'
    },
    {
        id: 2,
        title: 'Aplicativo de Fitness',
        description: 'App mobile para treinos personalizados e monitoramento.',
        tags: ['React Native', 'Firebase', 'Redux'],
        image: '💪'
    },
    {
        id: 3,
        title: 'Dashboard Analytics',
        description: 'Painel de análise de dados em tempo real.',
        tags: ['Vue.js', 'Chart.js', 'WebSocket'],
        image: '📊'
    }
]

// Depoimentos
export const TESTIMONIALS = [
    {
        id: 1,
        name: 'João Silva',
        title: 'CEO - TechStart',
        text: 'Transformou completamente nossa presença digital. Recomendo fortemente!',
        avatar: 'JS',
        rating: 5
    },
    {
        id: 2,
        name: 'Maria Santos',
        title: 'Diretora - Inovação Digital',
        text: 'Equipe profissional, dedicada e sempre disponível para tirar dúvidas.',
        avatar: 'MS',
        rating: 5
    },
    {
        id: 3,
        name: 'Carlos Oliveira',
        title: 'Founder - StartupXYZ',
        text: 'Entregaram um produto de qualidade excepcional no prazo combinado.',
        avatar: 'CO',
        rating: 5
    }
]

// Informações de contato
export const CONTACT_INFO = [
    {
        id: 1,
        type: 'phone',
        icon: '📞',
        title: 'Telefone',
        value: '+55 (11) 99999-9999',
        label: 'Seg-Sex, 09:00-18:00'
    },
    {
        id: 2,
        type: 'email',
        icon: '📧',
        title: 'Email',
        value: 'contato@gabbfernyh.com',
        label: 'Respondemos em 24h'
    },
    {
        id: 3,
        type: 'location',
        icon: '📍',
        title: 'Localização',
        value: 'São Paulo - SP',
        label: 'Brasil'
    }
]

// Estatísticas
export const STATS = [
    { value: '+50', label: 'Projetos Entregues' },
    { value: '100%', label: 'Satisfação de Clientes' },
    { value: '24/7', label: 'Suporte Técnico' }
]

// Temas de cores disponíveis
export const COLOR_THEMES = {
    default: {
        primary: '#0ea5e9',
        accent: '#06b6d4',
        dark: '#0f172a',
        darkest: '#020617'
    },
    alternate: {
        primary: '#8b5cf6',
        accent: '#a78bfa',
        dark: '#1f1f2e',
        darkest: '#0f0f1e'
    }
}

// Breakpoints (deve corresponder a variables.css)
export const BREAKPOINTS = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 991.98,
    xl: 1200,
    xxl: 1400
}

// Social media links (futuro)
export const SOCIAL_LINKS = [
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Instagram', url: '#', icon: 'instagram' }
]
