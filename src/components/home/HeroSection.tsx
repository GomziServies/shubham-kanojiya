const HeroSection = () => {
    return (
        <section className="tg-banner-area banner-bg jarallax parallax-img pt-32 pb-20">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                        <div className="tg-banner-img text-center wow fadeInRight" data-wow-delay=".6s">
                            <img src="/images/banner_img.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="tg-banner-content">
                            <h4 className="sub-title wow fadeInUp" data-wow-delay=".2s">Increased Energy!</h4>
                            <h2 className="title wow fadeInUp" data-wow-delay=".4s">Speed. Strength. Supremacy.</h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">Speed - Premium protein supplements for muscle growth, strength, and peak performance!.</p>
                            <div className="tg-banner-btn wow fadeInUp" data-wow-delay=".8s">
                                <a href="#supplement" className="tg-btn">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
