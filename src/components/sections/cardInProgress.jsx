export default function InProgress() {
    return (
        <div className="row mt-5">
            <div className="col-12">
                <div className="card border-0 rounded-4 p-4 p-md-5 text-center h-100"
                    style={{
                        background: 'rgba(17, 24, 39, 0.4)',
                        backdropFilter: 'blur(10px)',
                        borderColor: 'rgba(14, 165, 233, 0.2)',
                        boxShadow: '0 10px 30px rgba(14, 165, 233, 0.2)',
                        transition: 'all 0.5s ease-in-out',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(14, 165, 233, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(14, 165, 233, 0.2)';
                    }}>
                    
                    <div className="mx-auto" style={{ maxWidth: '48rem' }}>
                        {/* Icon */}
                        <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4"
                            style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'rgba(14, 165, 233, 0.15)',
                                border: '2px solid rgba(14, 165, 233, 0.3)',
                                boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0ea5e9"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="m18 16 4-4-4-4" />
                                <path d="m6 8-4 4 4 4" />
                                <path d="m14.5 4-5 16" />
                            </svg>
                        </div>

                        {/* Content */}
                        <h3 className="h2 fw-bold text-white mb-3">
                            Mais projetos em breve
                        </h3>
                        <p className="lead text-secondary mb-0">
                            Novos projetos estão sendo desenvolvidos e serão adicionados em breve.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}