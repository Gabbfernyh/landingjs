import React from 'react'
import BtnLink from "../sections/btnProjects"
import { useLanguage } from '../../lib/translations'

export default function CardProjects() {
    const { t } = useLanguage()

    return (
        <>
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
                        <h4>{t('project1Title')}</h4>
                        <p>{t('project1Desc')}</p>
                        <div className="project-tags">
                            <span className="tag">React</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">MongoDB</span>
                        </div>
                        <BtnLink />
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
                        <h4>{t('project2Title')}</h4>
                        <p>{t('project2Desc')}</p>
                        <div className="project-tags">
                            <span className="tag">Vue.js</span>
                            <span className="tag">Chart.js</span>
                            <span className="tag">API REST</span>
                        </div>
                        <BtnLink />
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
                        <h4>{t('project3Title')}</h4>
                        <p>{t('project3Desc')}</p>
                        <div className="project-tags">
                            <span className="tag">Flutter</span>
                            <span className="tag">Firebase</span>
                            <span className="tag">Cloud</span>
                        </div>
                        <BtnLink />
                    </div>
                </div>
            </div>
        </>
    )
}
