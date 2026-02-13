// import { useState } from 'react'
import faviconBlue from './assets/icon/faviconBlue.svg'
// import faviconGreen from './assets/icon/faviconGreen.svg'
import Buttons from './components/button'
import './App.css'
import Header from './sections/Header'

function App() {
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
              <p className="hero-subtitle">Bem-vindo à</p>
              <h1 className="hero-title">
                Gabbfernyh <br />
                <span className="text-gradient">Soluções Tecnológicas</span>
              </h1>
              <p className="hero-description">Transformamos ideias em realidade digital. Criamos soluções tecnológicas inovadoras que impulsionam o crescimento do seu negócio com excelência e segurança.</p>

              <Buttons />

              <div className="hero-stats mt-5">
                <div className="stat-item">
                  <span className="stat-value">+50</span>
                  <span className="stat-label">Projetos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Satisfação</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">Suporte</span>
                </div>
              </div>
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
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>Sobre a Gabbfernyh ST</h2>
            <p className="section-subtitle">Inovação, Qualidade e Excelência em Soluções Tecnológicas</p>
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
                <h3>Nossa Missão</h3>
                <p>Transformar ideias em soluções tecnológicas inovadoras, oferecendo serviços de excelência que impulsionam o crescimento e a transformação digital de nossos clientes. Comprometidos em entregar qualidade, segurança e inovação contínua.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-card">
                <div className="about-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3>Nossa Visão</h3>
                <p>Ser referência em soluções tecnológicas no mercado, reconhecida pela qualidade, inovação e satisfação dos clientes. Buscamos ser parceiros confiáveis na jornada digital de cada negócio, criando impacto positivo e valor duradouro.</p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-md-4 text-center">
              <div className="stat-card">
                <h4 className="stat-number">+50</h4>
                <p>Projetos Realizados</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="stat-card">
                <h4 className="stat-number">100%</h4>
                <p>Satisfação de Clientes</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="stat-card">
                <h4 className="stat-number">24/7</h4>
                <p>Suporte Disponível</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Nossos Serviços</h2>
            <p className="section-subtitle">O que oferecemos</p>
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
                <h4>Desenvolvimento Web Responsivo</h4>
                <p>Criamos sites modernos, rápidos e acessíveis que transformam sua visão em realidade digital. Cada projeto é otimizado para performance máxima e conversão.</p>
                <ol>
                  <li><strong>Design Responsivo:</strong> Experiência perfeita em todos os dispositivos</li>
                  <li><strong>Otimização SEO:</strong> Melhor visibilidade nos motores de busca</li>
                  <li><strong>Segurança Premium:</strong> Proteção de dados e certificados SSL</li>
                  <li><strong>Manutenção Contínua:</strong> Suporte técnico e atualizações regulares</li>
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
                <h4>Design e Identidade Visual</h4>
                <p>Desenvolvemos identidades visuais memoráveis que comunicam os valores da sua marca com elegância e impacto. Do conceito à implementação, criamos soluções de design estratégico.</p>
                <ol>
                  <li><strong>Branding Estratégico:</strong> Logotipos e identidade visual coerentes</li>
                  <li><strong>Design Gráfico:</strong> Materiais criativos e profissionais</li>
                  <li><strong>UI/UX Design:</strong> Interfaces intuitivas e centradas no usuário</li>
                  <li><strong>Guia de Marca:</strong> Padrões visuais consistentes</li>
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
                <h4>Suporte Técnico Especializado</h4>
                <p>Mantemos sua infraestrutura tecnológica funcionando perfeitamente com suporte proativo, diagnóstico rápido e soluções eficientes para minimizar tempo de inatividade.</p>
                <ol>
                  <li><strong>Manutenção Preventiva:</strong> Diagnóstico e otimização contínua</li>
                  <li><strong>Suporte Técnico 24/7:</strong> Atendimento rápido e eficiente</li>
                  <li><strong>Instalação de Software:</strong> Configuração e licenciamento</li>
                  <li><strong>Recuperação de Dados:</strong> Backup e segurança de informações</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>Nossos Projetos</h2>
            <p className="section-subtitle">Conheça alguns de nossos trabalhos destacados</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="2" y1="20" x2="22" y2="20"></line>
                    </svg>
                  </div>
                </div>
                <div className="project-content">
                  <h4>E-commerce Premium</h4>
                  <p>Plataforma de vendas com integração de pagamentos, catálogo dinâmico e painel administrativo completo.</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="project-content">
                  <h4>Dashboard Analítico</h4>
                  <p>Sistema de monitoramento em tempo real com gráficos interativos, relatórios personalizados e exportação de dados.</p>
                  <div className="project-tags">
                    <span className="tag">Vue.js</span>
                    <span className="tag">Chart.js</span>
                    <span className="tag">API REST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <div className="project-content">
                  <h4>App Gestão RH</h4>
                  <p>Aplicação mobile para gerenciamento de recursos humanos, folha de ponto e documentação colaboradores.</p>
                  <div className="project-tags">
                    <span className="tag">Flutter</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>O que Nossos Clientes Dizem</h2>
            <p className="section-subtitle">Depoimentos de satisfação e confiança</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p className="testimonial-text">"A Gabbfernyh transformou completamente minha presença online. Profissionais dedicados, prazos cumpridos e resultado além das expectativas!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M12 14a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="author-name">Maria Silva</h5>
                    <p className="author-title">CEO - Tech Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p className="testimonial-text">"Excelente atendimento! A equipe entendeu perfeitamente nossas necessidades e entregou um site que superou todos os objetivos."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M12 14a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="author-name">João Santos</h5>
                    <p className="author-title">Diretor - Consultoria XYZ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p className="testimonial-text">"Suporte 24/7 impecável! Qualquer dúvida ou problema é resolvido imediatamente. Recomendo para todos os negócios."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M12 14a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="author-name">Ana Costa</h5>
                    <p className="author-title">Gerente - Ecommerce Plus</p>
                  </div>
                </div>
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
            <p className="section-subtitle">Vamos transformar sua ideia em realidade</p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h5>Telefone</h5>
                <p>+55 (11) 9XXXX-XXXX</p>
                <p className="small-text">Disponível para consultas</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h5>Email</h5>
                <p>contato@gabbfernyh.com</p>
                <p className="small-text">Resposta em até 24h</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h5>Localização</h5>
                <p>São Paulo, SP</p>
                <p className="small-text">Atuação Nacional e Internacional</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control form-control-lg" placeholder="Seu Nome" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" className="form-control form-control-lg" placeholder="Seu Email" required />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Assunto" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control form-control-lg" rows="5" placeholder="Sua Mensagem" required></textarea>
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
