import faviconBlue from '../assets/icon/faviconBlue.svg'

function Header() {
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
                                <a className="nav-link" href="#projects">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonials">Depoimentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
