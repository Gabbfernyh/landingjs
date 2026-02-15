import { useState, useEffect } from 'react'

export default function CardTecnologia() {
    const [activeTech, setActiveTech] = useState(-1)
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'pt')

    useEffect(() => {
        const handleLanguageChange = (event) => {
            setLanguage(event.detail.language)
        }

        window.addEventListener('languageChanged', handleLanguageChange)
        return () => window.removeEventListener('languageChanged', handleLanguageChange)
    }, [])

    const tecnologias = [
        {
            id: 1,
            nome: "React",
            area: { pt: "Frontend / UI", en: "Frontend / UI" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            descricao: { pt: "Biblioteca JavaScript para construção de interfaces de usuário interativas", en: "JavaScript library for building interactive user interfaces" },
            oFaz: { pt: "Cria componentes reutilizáveis, gerencia estado da aplicação e renderiza a UI de forma eficiente", en: "Creates reusable components, manages application state, and renders UI efficiently" },
            utilizacao: { pt: "Desenvolvimento de Single Page Applications (SPAs), dashboards, portais web e aplicações progressivas", en: "Development of Single Page Applications (SPAs), dashboards, web portals and progressive web apps" }
        },
        {
            id: 2,
            nome: "React Native",
            area: { pt: "Mobile / Multiplataforma", en: "Mobile / Cross-Platform" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            descricao: { pt: "Framework para desenvolvimento de aplicações móveis nativas com React", en: "Framework for developing native mobile applications with React" },
            oFaz: { pt: "Permite criar apps para iOS e Android usando JavaScript e componentes reutilizáveis", en: "Allows creating apps for iOS and Android using JavaScript and reusable components" },
            utilizacao: { pt: "Desenvolvimento de aplicações móveis cross-platform, apps híbridas de alta performance", en: "Development of cross-platform mobile applications, high-performance hybrid apps" }
        },
        {
            id: 3,
            nome: "JavaScript",
            area: { pt: "Linguagem / Core", en: "Language / Core" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            descricao: { pt: "Linguagem de programação versátil para web, backend e mobile", en: "Versatile programming language for web, backend and mobile" },
            oFaz: { pt: "Executa lógica interativa no navegador, manipula DOM e comunica com servidores", en: "Executes interactive logic in the browser, manipulates DOM and communicates with servers" },
            utilizacao: { pt: "Frontend, backend com Node.js, automação, desenvolvimento full-stack", en: "Frontend, backend with Node.js, automation, full-stack development" }
        },
        {
            id: 4,
            nome: "HTML",
            area: { pt: "Markup / Estrutura", en: "Markup / Structure" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            descricao: { pt: "Linguagem de marcação para estruturação de conteúdo web", en: "Markup language for structuring web content" },
            oFaz: { pt: "Define a estrutura semântica do documento, organiza elementos e metadados", en: "Defines semantic structure of documents, organizes elements and metadata" },
            utilizacao: { pt: "Base de todas as páginas web, conteúdo estruturado, acessibilidade", en: "Foundation of all web pages, structured content, accessibility" }
        },
        {
            id: 5,
            nome: "CSS",
            area: { pt: "Estilização / Design", en: "Styling / Design" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            descricao: { pt: "Linguagem de estilos para design visual de aplicações web", en: "Styling language for visual design of web applications" },
            oFaz: { pt: "Estiliza elementos HTML, cria layouts responsivos e animações visuais", en: "Styles HTML elements, creates responsive layouts and visual animations" },
            utilizacao: { pt: "Design responsivo, animações, temas visuais, sistemas de design", en: "Responsive design, animations, visual themes, design systems" }
        },
        {
            id: 6,
            nome: "Bootstrap",
            area: { pt: "Frontend / Framework CSS", en: "Frontend / CSS Framework" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            descricao: { pt: "Framework CSS para desenvolvimento rápido de interfaces responsivas", en: "CSS framework for rapid development of responsive interfaces" },
            oFaz: { pt: "Fornece componentes pré-estilizados, grid system e utilitários CSS prontos para uso", en: "Provides pre-styled components, grid system and ready-to-use CSS utilities" },
            utilizacao: { pt: "Prototipagem rápida, interfaces responsivas, componentes padrão da indústria", en: "Rapid prototyping, responsive interfaces, industry-standard components" }
        },
        {
            id: 7,
            nome: "Node.js",
            area: { pt: "Backend / Runtime", en: "Backend / Runtime" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            descricao: { pt: "Ambiente JavaScript para execução no servidor", en: "JavaScript environment for server-side execution" },
            oFaz: { pt: "Executa JavaScript no backend, gerencia requisições HTTP, acesso a bancos de dados e lógica de negócio", en: "Executes JavaScript on backend, manages HTTP requests, database access and business logic" },
            utilizacao: { pt: "APIs REST, servidor web, processamento de dados, aplicações em tempo real e microserviços", en: "REST APIs, web servers, data processing, real-time applications and microservices" }
        },
        {
            id: 8,
            nome: "Express",
            area: { pt: "Backend / Framework", en: "Backend / Framework" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            descricao: { pt: "Framework minimalista e flexível para Node.js", en: "Minimalist and flexible framework for Node.js" },
            oFaz: { pt: "Facilita criação de rotas, middleware, tratamento de requisições e construção de APIs REST", en: "Facilitates route creation, middleware, request handling and REST API construction" },
            utilizacao: { pt: "Criação de APIs, servidores web, aplicações backend, integração com bancos de dados", en: "API creation, web servers, backend applications, database integration" }
        },
        {
            id: 9,
            nome: "MongoDB",
            area: { pt: "Banco de Dados / NoSQL", en: "Database / NoSQL" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            descricao: { pt: "Banco de dados não-relacional orientado a documentos", en: "Non-relational document-oriented database" },
            oFaz: { pt: "Armazena dados em formato JSON-like, permite consultas flexíveis e escalabilidade horizontal", en: "Stores data in JSON-like format, allows flexible queries and horizontal scalability" },
            utilizacao: { pt: "Armazenamento de dados flexível, aplicações com estruturas dinâmicas, sistemas em tempo real", en: "Flexible data storage, applications with dynamic structures, real-time systems" }
        },
        {
            id: 10,
            nome: "MySQL",
            area: { pt: "Banco de Dados / Relacional", en: "Database / Relational" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            descricao: { pt: "Sistema de gerenciamento de banco de dados relacional open-source", en: "Open-source relational database management system" },
            oFaz: { pt: "Armazena dados estruturados em tabelas, oferece queries SQL poderosas e transações ACID", en: "Stores structured data in tables, offers powerful SQL queries and ACID transactions" },
            utilizacao: { pt: "Aplicações web tradicionais, ecommerce, sistemas empresariais, dados estruturados", en: "Traditional web applications, e-commerce, enterprise systems, structured data" }
        },
        {
            id: 11,
            nome: "WordPress",
            area: { pt: "CMS / Web Platform", en: "CMS / Web Platform" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
            descricao: { pt: "Plataforma de gerenciamento de conteúdo (CMS) mais popular do mundo", en: "World's most popular content management platform (CMS)" },
            oFaz: { pt: "Permite criar sites, blogs e ecommerce sem programação, com temas e plugins customizáveis", en: "Allows creating websites, blogs and e-commerce without programming, with customizable themes and plugins" },
            utilizacao: { pt: "Blogs, sites corporativos, lojas online, landing pages, conteúdo dinâmico", en: "Blogs, corporate websites, online stores, landing pages, dynamic content" }
        },
        {
            id: 12,
            nome: "Figma",
            area: { pt: "Design / Prototipagem", en: "Design / Prototyping" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            descricao: { pt: "Ferramenta de design colaborativo baseada em nuvem", en: "Cloud-based collaborative design tool" },
            oFaz: { pt: "Cria protótipos interativos, designs responsivos e compartilha em tempo real com equipes", en: "Creates interactive prototypes, responsive designs and shares in real-time with teams" },
            utilizacao: { pt: "UI/UX design, prototipagem, design systems, colaboração remota de designers", en: "UI/UX design, prototyping, design systems, remote designer collaboration" }
        },
        {
            id: 13,
            nome: "TypeScript",
            area: { pt: "Linguagem / Type Safety", en: "Language / Type Safety" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            descricao: { pt: "Superset JavaScript que adiciona tipagem estática", en: "JavaScript superset that adds static typing" },
            oFaz: { pt: "Adiciona tipos de dados, interfaces e type checking em tempo de desenvolvimento para maior segurança", en: "Adds data types, interfaces and type checking at development time for greater safety" },
            utilizacao: { pt: "Projetos grandes, aplicações complexas, redução de bugs e melhor manutenibilidade do código", en: "Large projects, complex applications, bug reduction and better code maintainability" }
        },
        {
            id: 14,
            nome: "Git/GitHub",
            area: { pt: "Versionamento / DevOps", en: "Version Control / DevOps" },
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            descricao: { pt: "Sistema de controle de versão distribuído e plataforma de colaboração", en: "Distributed version control system and collaboration platform" },
            oFaz: { pt: "Rastreia mudanças no código, permite colaboração em equipe e mantém histórico completo do projeto", en: "Tracks code changes, enables team collaboration and maintains complete project history" },
            utilizacao: { pt: "Controle de versão, colaboração em desenvolvimento, CI/CD, backup e gerenciamento de código", en: "Version control, development collaboration, CI/CD, backup and code management" }
        }
    ]

    const handleTechClick = (index) => {
        setActiveTech(index)
    }

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setActiveTech(-1)
        }
    }

    return (
        <>
            <div className="tech-section-wrapper">
                <div className="tech-grid">
                    {tecnologias.map((tech, index) => (
                        <div 
                            key={tech.id} 
                            className="tech-item"
                            onClick={() => handleTechClick(index)}
                        >
                            <div className="tech-item-content">
                                <img src={tech.iconUrl} alt={tech.nome} className="tech-item-icon" />
                                <h4 className="tech-item-nome">{tech.nome}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {activeTech >= 0 && (
                <div className="tech-modal-backdrop" onClick={handleBackdropClick}>
                    <div className="tech-modal">
                        <button 
                            className="tech-modal-close"
                            onClick={() => setActiveTech(-1)}
                        >
                            ✕
                        </button>

                        <div className="tech-modal-header">
                            <img src={tecnologias[activeTech].iconUrl} alt={tecnologias[activeTech].nome} className="tech-modal-icon" />
                            <div>
                                <h3>{tecnologias[activeTech].nome}</h3>
                                <span className="tech-modal-area">{tecnologias[activeTech].area[language]}</span>
                            </div>
                        </div>

                        <div className="tech-modal-content">
                            <p className="tech-modal-descricao">
                                {tecnologias[activeTech].descricao[language]}
                            </p>

                            <div className="tech-modal-info">
                                <div className="tech-modal-block">
                                    <h5>{language === 'en' ? '📌 What it does' : '📌 O que faz'}</h5>
                                    <p>{tecnologias[activeTech].oFaz[language]}</p>
                                </div>

                                <div className="tech-modal-block">
                                    <h5>{language === 'en' ? '🎯 Usage' : '🎯 Utilização'}</h5>
                                    <p>{tecnologias[activeTech].utilizacao[language]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
