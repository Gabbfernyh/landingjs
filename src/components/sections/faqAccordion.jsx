import { useState } from 'react'
import { useLanguage } from '../../lib/translations'

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(null)
    const { t } = useLanguage()

    const faqs = [
        {
            id: 1,
            pergunta: t('faq1Q'),
            resposta: t('faq1A')
        },
        {
            id: 2,
            pergunta: t('faq2Q'),
            resposta: t('faq2A')
        },
        {
            id: 3,
            pergunta: t('faq3Q'),
            resposta: t('faq3A')
        },
        {
            id: 4,
            pergunta: t('faq4Q'),
            resposta: t('faq4A')
        },
        {
            id: 5,
            pergunta: t('faq5Q'),
            resposta: t('faq5A')
        },
        {
            id: 6,
            pergunta: t('faq6Q'),
            resposta: t('faq6A')
        },
        {
            id: 7,
            pergunta: t('faq7Q'),
            resposta: t('faq7A')
        },
        {
            id: 8,
            pergunta: t('faq8Q'),
            resposta: t('faq8A')
        }
    ]

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <details 
                    key={faq.id} 
                    className="faq-item"
                    open={openIndex === index}
                    onClick={(e) => {
                        e.preventDefault()
                        toggleAccordion(index)
                    }}
                >
                    <summary className="faq-pergunta">
                        <span className="faq-icon">
                            {openIndex === index ? '▼' : '▶'}
                        </span>
                        <h4>{faq.pergunta}</h4>
                    </summary>
                    <div className="faq-resposta">
                        <p>{faq.resposta}</p>
                    </div>
                </details>
            ))}
        </div>
    )
}
