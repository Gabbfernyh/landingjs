import faviconBlue from './assets/icon/faviconBlue.svg'
import Buttons from './components/common/button'
import CardProjects from './components/sections/cardProjects'
import CardTecnologia from './components/sections/cardTecnologia'
import FAQAccordion from './components/sections/faqAccordion'
import Footer from './components/sections/Footer'
import CardComents from './components/sections/cardComents'
import ContactCards from './components/sections/contactCards'
import { useLanguage } from './lib/translations'
import InProgress from './components/sections/cardInProgress'
import './App.css'
import './styles/footer.css'
import Header from './components/sections/Header'

function App() {
  const { t } = useLanguage()
  return (
    <>
      {/* HEADER/NAVBAR */}
      < Header />

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 ps-5 hero-content">
              <div className="hero-badge mb-4">
                <span className="badge-text">✨ Soluções Inovadoras para seu Negócio</span>
              </div>
              <p className="hero-subtitle">{t('heroSubtitle')}</p>
              <h1 className="hero-title">
                Gabbfernyh <br />
                <span className="text-gradient">{t('heroTitle')}</span>
              </h1>
              <p className="hero-description">{t('heroDescription')}</p>

              <Buttons />
            </div>

            <div className="col-lg-6 hero-visual">
              <div className="hero-image-wrapper">
                <div className="hero-glow"></div>
                <div className="hero-orbs">
                  <div className="orb orb-1"></div>
                  <div className="orb orb-2"></div>
                  <div className="orb orb-3"></div>
                </div>
                <div className="hero-image">
                  <img src={faviconBlue} alt="hero" className="hero-img" />
                </div>
                <div className="hero-shine"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>{t('aboutTitle')}</h2>
            <p className="section-subtitle">{t('aboutSubtitle')}</p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-card">
                <div className="about-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3>{t('missionTitle')}</h3>
                <p>{t('missionDesc')}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-card">
                <div className="about-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3>{t('visionTitle')}</h3>
                <p>{t('visionDesc')}</p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-md-4 text-center">
              <div className="stat-card">
                <h4 className="stat-number">+50</h4>
                <p>{t('statsProjects')}</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="stat-card">
                <h4 className="stat-number">100%</h4>
                <p>{t('statsClients')}</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="stat-card">
                <h4 className="stat-number">24/7</h4>
                <p>{t('statsSupport')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>{t('servicesTitle')}</h2>
            <p className="section-subtitle">{t('servicesSubtitle')}</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h4>{t('webDevTitle')}</h4>
                <p>{t('webDevDesc')}</p>
                <ol>
                  <li><strong>{t('webDev1').split(':')[0]}:</strong> {t('webDev1').split(':')[1]}</li>
                  <li><strong>{t('webDev2').split(':')[0]}:</strong> {t('webDev2').split(':')[1]}</li>
                  <li><strong>{t('webDev3').split(':')[0]}:</strong> {t('webDev3').split(':')[1]}</li>
                  <li><strong>{t('webDev4').split(':')[0]}:</strong> {t('webDev4').split(':')[1]}</li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7v10a8 8 0 0 0 8 8 8 8 0 0 0 8-8V7l-10-5z"></path>
                    <path d="M12 7v5l3 2M9 10l3-2 3 2"></path>
                  </svg>
                </div>
                <h4>{t('designTitle')}</h4>
                <p>{t('designDesc')}</p>
                <ol>
                  <li><strong>{t('design1').split(':')[0]}:</strong> {t('design1').split(':')[1]}</li>
                  <li><strong>{t('design2').split(':')[0]}:</strong> {t('design2').split(':')[1]}</li>
                  <li><strong>{t('design3').split(':')[0]}:</strong> {t('design3').split(':')[1]}</li>
                  <li><strong>{t('design4').split(':')[0]}:</strong> {t('design4').split(':')[1]}</li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <circle cx="11" cy="11" r="3"></circle>
                    <line x1="11" y1="6" x2="11" y2="16"></line>
                    <line x1="6" y1="11" x2="16" y2="11"></line>
                  </svg>
                </div>
                <h4>{t('supportTitle')}</h4>
                <p>{t('supportDesc')}</p>
                <ol>
                  <li><strong>{t('support1').split(':')[0]}:</strong> {t('support1').split(':')[1]}</li>
                  <li><strong>{t('support2').split(':')[0]}:</strong> {t('support2').split(':')[1]}</li>
                  <li><strong>{t('support3').split(':')[0]}:</strong> {t('support3').split(':')[1]}</li>
                  <li><strong>{t('support4').split(':')[0]}:</strong> {t('support4').split(':')[1]}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNOLOGIES SECTION */}
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>{t('technologiesTitle')}</h2>
            <p className="section-subtitle">{t('technologiesSubtitle')}</p>
          </div>
          <CardTecnologia />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>{t('projectsTitle')}</h2>
            <p className="section-subtitle">{t('projectsSubtitle')}</p>
          </div>
          <div className="row g-4">
            <CardProjects />
          </div>
            <InProgress />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>{t('testimonialTitle')}</h2>
            <p className="section-subtitle">{t('testimonialSubtitle')}</p>
          </div>
          <div className="row g-4">
            <CardComents />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>{t('faqTitle')}</h2>
            <p className="section-subtitle">{t('faqSubtitle')}</p>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>{t('contactTitle')}</h2>
            <p className="section-subtitle">{t('contactSubtitle')}</p>
          </div>

          <div className="contact-content">
            {/* Cards de Contato - Esquerda */}
            <div className="contact-cards-wrapper">
              <ContactCards />
            </div>

            {/* Formulário - Direita */}
            <form className="contact-form">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder={t('contactName')} required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <input type="email" className="form-control form-control-lg" placeholder={t('contactEmail')} required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg" placeholder={t('contactSubjectPlaceholder')} required />
              </div>
              <div className="mb-3">
                <textarea className="form-control form-control-lg" rows="4" placeholder={t('contactMessagePlaceholder')} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100">{t('contactButton')}</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      < Footer />
    </>
  )
}

export default App
