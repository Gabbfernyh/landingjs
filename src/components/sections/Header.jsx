import { useEffect, useState } from 'react'
import faviconBlue from '../../assets/icon/faviconBlue.svg'
import ThemeToggle from '../../components/common/themeToggle'
import { useLanguage } from '../../lib/translations'

function Header() {
    const [activeSection, setActiveSection] = useState('home')
    const { t } = useLanguage()

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.navbar-collapse')
            const toggler = document.querySelector('.navbar-toggler')
            
            // Se o menu está visível e clicou fora dele e do toggler
            if (navbar && navbar.classList.contains('show')) {
                if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
                    // Fechar o menu
                    toggler.click()
                }
            }
        }

        // Também fechar ao clicar em um link
        const handleNavLinkClick = () => {
            const navbar = document.querySelector('.navbar-collapse')
            const toggler = document.querySelector('.navbar-toggler')
            
            if (navbar && navbar.classList.contains('show')) {
                toggler.click()
            }
        }

        // Detectar seção ativa ao fazer scroll
        const handleScroll = () => {
            const sections = document.querySelectorAll('[id]')
            let currentSection = 'home'
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100
                const sectionHeight = section.offsetHeight
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id')
                }
            })
            
            setActiveSection(currentSection)
        }

        document.addEventListener('click', handleClickOutside)
        window.addEventListener('scroll', handleScroll)
        
        const navLinks = document.querySelectorAll('.nav-link')
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick)
        })

        return () => {
            document.removeEventListener('click', handleClickOutside)
            window.removeEventListener('scroll', handleScroll)
            navLinks.forEach(link => {
                link.removeEventListener('click', handleNavLinkClick)
            })
        }
    }, [])

    return (
        <header className="header-section">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid px-4">
                    <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
                        <img src={faviconBlue} className="App-logo" alt="logo" />
                        <span className="brand-text fw-bold">Gabbfernyh ST</span>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-2 align-items-center">
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home">{t('navHome')}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about">{t('navAbout')}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} href="#services">{t('navServices')}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">{t('navProjects')}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`} href="#testimonials">{t('navTestimonials')}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">{t('navContact')}</a>
                            </li>
                            <li className="nav-item">
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
