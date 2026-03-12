import { useState } from 'react';

const Faq = () => {
    const [activeId, setActiveId] = useState<string | null>('collapseOne');

    const toggleAccordion = (id: string) => {
        setActiveId(activeId === id ? null : id);
    };

    const faqItems = [
        {
            id: 'collapseOne',
            headingId: 'headingOne',
            question: 'What makes Nutradyne Healthcare supplements different?',
            answer: 'Nutradyne Healthcare uses scientifically-backed ingredients that enhance muscle growth, strength, and recovery. Our formulations are designed for maximum effectiveness and purity.'
        },
        {
            id: 'collapseTwo',
            headingId: 'headingTwo',
            question: 'How long does it take to see results?',
            answer: 'Results vary, but most users begin noticing improvements in strength and recovery within 2-4 weeks of consistent use.'
        },
        {
            id: 'collapseThree',
            headingId: 'headingThree',
            question: 'Are Nutradyne Healthcare supplements safe to use?',
            answer: 'Yes, our products are crafted with high-quality, natural ingredients and undergo rigorous testing to ensure safety and effectiveness.'
        },
        {
            id: 'collapseFour',
            headingId: 'headingFour',
            question: 'Can I take Nutradyne Healthcare supplements with my current routine?',
            answer: 'Absolutely! Our supplements are designed to complement any workout or fitness regimen and enhance overall performance.'
        },
        {
            id: 'collapseFive',
            headingId: 'headingFive',
            question: 'Do your products contain artificial additives or fillers?',
            answer: 'No, we pride ourselves on offering clean, natural products free from artificial additives, fillers, and harmful chemicals.'
        }
    ];

    return (
        <section className="faq-area position-relative">
            <div className="row justify-content-end g-0">
                <div className="col-12">
                    <div className="faq-wrapper-two">
                        <div className="section-title section-title-two white-title mb-5">
                            <h2 className="title text-center">Ask question</h2>
                        </div>
                        <div className="accordion-custom">
                            {faqItems.map((item) => (
                                <div className="faq-item" key={item.id} style={{ marginBottom: '10px' }}>
                                    <button 
                                        className="faq-button"
                                        onClick={() => toggleAccordion(item.id)}
                                        style={{ 
                                            width: '100%', 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            alignItems: 'center',
                                            textAlign: 'left',
                                            padding: '29px 45px',
                                            backgroundColor: '#2a2a2a',
                                            border: 'none',
                                            color: 'white',
                                            fontSize: '22px',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            borderRadius: activeId === item.id ? '10px 10px 0 0' : '10px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <span style={{ flex: 1, textAlign: 'left' }}>{item.question}</span>
                                        <i 
                                            className={`fas ${activeId === item.id ? 'fa-minus' : 'fa-plus'}`} 
                                            style={{ marginLeft: '10px', fontSize: '14px', flexShrink: 0 }}
                                        ></i>
                                    </button>
                                    {activeId === item.id && (
                                        <div 
                                            style={{ 
                                                padding: '0 45px 38px 45px',
                                                backgroundColor: '#2a2a2a',
                                                borderBottomLeftRadius: '10px',
                                                borderBottomRightRadius: '10px'
                                            }}
                                        >
                                            <p style={{ 
                                                color: '#ffffff', 
                                                fontSize: '18px',
                                                margin: '0',
                                                position: 'relative',
                                                paddingTop: '15px',
                                                borderTop: '1px solid rgba(236, 237, 243, 0.17)'
                                            }}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;