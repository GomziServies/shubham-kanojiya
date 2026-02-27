const HeroSection = () => {
  return (
    <section className="tg-banner-area banner-bg jarallax parallax-img pt-32 pb-20">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* Right Image Section */}
          <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
            <div className="tg-banner-img text-center wow fadeInRight relative" data-wow-delay=".6s">
              
              
              {/* Shape Image Right Side */}
              <img
                src="/images/supplement_img.png"
                alt=""
                className="hidden md:block"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="tg-banner-content">
              <h4 className="sub-title wow fadeInUp" data-wow-delay=".2s">
                Trusted in Health & Wellness!
              </h4>

              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Nutradyne Healthcare
              </h2>

              <p className="wow fadeInUp" data-wow-delay=".6s">
                Nutradyne Healthcare — Premium nutrition supplements crafted for your health, vitality, and peak performance.
              </p>

              <div className="tg-banner-btn wow fadeInUp" data-wow-delay=".8s">
                <a href="#product-showcase" className="tg-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;