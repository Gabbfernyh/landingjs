// import { useState } from 'react'
import faviconBlue from './assets/icon/faviconBlue.svg'
// import faviconGreen from './assets/icon/faviconGreen.svg'
import './App.css'

function App() {
  return (
    <>
      {/* HEADER/NAVBAR */}
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
              <ul className="navbar-nav ms-auto gap-2">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Ligth or Dark Theme Toggle */}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 ps-5">
              <p className="hero-subtitle">Bem-vindo à</p>
              <h1 className="hero-title">Gabbfernyh Soluções Tecnológicas</h1>
              <p className="hero-subtitle">Soluções inovadoras para impulsionar seu negócio</p>
              <button className="btn btn-primary btn-lg mt-4">Começar Agora</button>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src={faviconBlue} alt="hero" className="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>Sobre Nós</h2>
            <p className="section-subtitle">Conheça nossa história e missão</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-6">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>Nossos Serviços</h2>
            <p className="section-subtitle">O que oferecemos</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card">
                <h4>Serviço 1</h4>
                <p>Descrição do serviço 1</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <h4>Serviço 2</h4>
                <p>Descrição do serviço 2</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <h4>Serviço 3</h4>
                <p>Descrição do serviço 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>Entre em Contato</h2>
            <p className="section-subtitle">Estamos aqui para ajudar</p>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Seu Nome" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control form-control-lg" placeholder="Seu Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control form-control-lg" rows="5" placeholder="Sua Mensagem"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="container text-center py-4">
          <p>&copy; 2026 Gabbfernyh ST. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
