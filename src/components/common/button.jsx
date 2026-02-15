import { useLanguage } from '../../lib/translations'

export default function Buttons() {
    const { t } = useLanguage()

    return (
        <div className="hero-buttons mt-5">
            <button className="btn btn-primary btn-lg btn-hero">
                <span className="btn-text">{t('btnStartNow')}</span>
                <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-outline-hero btn-lg ms-3">
                <span className="btn-text">{t('btnLearnMore')}</span>
            </button>
        </div>
        )
}
