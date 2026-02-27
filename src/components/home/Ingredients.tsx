import { Link } from 'react-router-dom';

const Ingredients = () => {
    return (
        <section id="ingredient" className="tg-supplement-area py-20">
            <div className="tg-supplement-bg"></div>
            <div className="container">
                <div className="tg-supplement-inner">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8 order-0 order-lg-2">
                            <div className="tg-supplement-img text-end wow fadeInRight" data-wow-delay=".2s">
                                <img src="/images/supplement_img.png" alt="" />
                            </div>
                            <div className="tg-supplement-shape">
                                <img src="/images/supplement_shape02.png" alt="" className="rotateme" />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="tg-supplement-content wow fadeInLeft" data-wow-delay=".2s">
                                <div className="tg-section-title mb-5">
                                    <span className="sub-title">ingredients</span>
                                    <h2 className="title">Growth-promoting<br /> supplement</h2>
                                </div>
                                <p>Unlock your potential with our growth-promoting supplement, designed to boost muscle development, enhance performance, and support recovery for maximum fitness results.</p>
                                <Link to="/about" className="tg-btn view-btn">VIEW more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ingredients;
