import { useLanguage } from '../../lib/translations'

export default function CardComents() {
    const { t } = useLanguage()

    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="testimonial-card">
                    <div className="stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                    <p className="testimonial-text">{t('testimonial1')}</p>
                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="8" r="4"></circle>
                                <path d="M12 14a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8z"></path>
                            </svg>
                        </div>
                        <div>
                            <h5 className="author-name">{t('testimonial1Author')}</h5>
                            <p className="author-title">{t('testimonial1Title')}</p>
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
                    <p className="testimonial-text">{t('testimonial2')}</p>
                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="8" r="4"></circle>
                                <path d="M12 14a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8z"></path>
                            </svg>
                        </div>
                        <div>
                            <h5 className="author-name">{t('testimonial2Author')}</h5>
                            <p className="author-title">{t('testimonial2Title')}</p>
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
                    <p className="testimonial-text">{t('testimonial3')}</p>
                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="8" r="4"></circle>
                                <path d="M12 14a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8z"></path>
                            </svg>
                        </div>
                        <div>
                            <h5 className="author-name">{t('testimonial3Author')}</h5>
                            <p className="author-title">{t('testimonial3Title')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
