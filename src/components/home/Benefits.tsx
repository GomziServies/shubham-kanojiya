import { Link } from 'react-router-dom';

const Benefits = () => {
    return (
        <section id="feature" className="tg-service-area py-20">
            <div className="container">
                <div className="tg-service-inner">
                    <div className="row justify-content-center ">
                        <div className="col-lg-8">
                            <div className="tg-section-title text-center mb-5">
                                <span className="sub-title">Speed Features</span>
                                <h2 className="title">Supplement Features</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-12">
                            <div className="tg-service-item">
                                <div className="tg-services-count">01</div>
                                <div className="icon">
                                    <i className="flaticon-proteins"></i>
                                </div>
                                <h2 className="title"><Link to="/contact">Pure Power</Link></h2>
                                <div className="tg-service-content">
                                    <p>Packed with potent ingredients for maximum muscle growth and performance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="tg-service-item">
                                <div className="tg-services-count">02</div>
                                <div className="icon">
                                    <i className="flaticon-strong-1"></i>
                                </div>
                                <h2 className="title"><Link to="/contact">Boost Strength</Link></h2>
                                <div className="tg-service-content">
                                    <p>Enhances strength and endurance to push your limits during every workout.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="tg-service-item">
                                <div className="tg-services-count">03</div>
                                <div className="icon">
                                    <i className="flaticon-whey-protein"></i>
                                </div>
                                <h2 className="title"><Link to="/contact">Rapid Recovery</Link></h2>
                                <div className="tg-service-content">
                                    <p>Supports faster recovery for better results after intense training sessions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="tg-service-item">
                                <div className="tg-services-count">04</div>
                                <div className="icon">
                                    <i className="flaticon-protein-2"></i>
                                </div>
                                <h2 className="title"><Link to="/contact">All Natural</Link></h2>
                                <div className="tg-service-content">
                                    <p>Formulated with high-quality, natural ingredients for clean muscle building.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="tg-service-item">
                                <div className="tg-services-count">05</div>
                                <div className="icon">
                                    <img src="/images/whey-protein.svg" className="flaticon-tape-measure" alt="Fast Absorption" />
                                </div>
                                <h2 className="title"><Link to="/contact">Fast Absorption</Link></h2>
                                <div className="tg-service-content">
                                    <p>Quickly absorbed to deliver nutrients where you need them most for optimal results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="tg-service-item">
                                <div className="tg-services-count">06</div>
                                <div className="icon">
                                    <i className="flaticon-dumbbell"></i>
                                </div>
                                <h2 className="title"><Link to="/contact">Max Performance</Link></h2>
                                <div className="tg-service-content">
                                    <p>Designed to elevate your performance and help you reach your fitness goals faster.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
