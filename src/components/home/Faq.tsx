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
            question: 'What makes Speed supplements different?',
            answer: 'Speed uses scientifically-backed ingredients that enhance muscle growth, strength, and recovery. Our formulations are designed for maximum effectiveness and purity.'
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
            question: 'Are Speed supplements safe to use?',
            answer: 'Yes, our products are crafted with high-quality, natural ingredients and undergo rigorous testing to ensure safety and effectiveness.'
        },
        {
            id: 'collapseFour',
            headingId: 'headingFour',
            question: 'Can I take Speed supplements with my current routine?',
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
        <section className="faq-area position-relative py-20">
            <div className="row justify-content-end g-0">
                <div className="col-12">
                    <div className="faq-wrapper-two">
                        <div className="section-title section-title-two white-title mb-5">
                            <h2 className="title text-center">Ask question</h2>
                        </div>
                        <div className="accordion" id="accordionExample">
                            {faqItems.map((item) => (
                                <div className="accordion-item" key={item.id}>
                                    <h2 className="accordion-header" id={item.headingId}>
                                        <button 
                                            className={`accordion-button ${activeId === item.id ? '' : 'collapsed'}`} 
                                            type="button" 
                                            onClick={() => toggleAccordion(item.id)}
                                            aria-expanded={activeId === item.id} 
                                            aria-controls={item.id}
                                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                                        >
                                            {item.question}
                                            <i className={`fas ${activeId === item.id ? 'fa-minus' : 'fa-plus'}`} style={{ marginLeft: '10px', fontSize: '14px' }}></i>
                                        </button>
                                    </h2>
                                    <div 
                                        id={item.id} 
                                        className={`accordion-collapse collapse ${activeId === item.id ? 'show' : ''}`} 
                                        aria-labelledby={item.headingId} 
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
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
