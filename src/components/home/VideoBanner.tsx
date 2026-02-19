import { Link } from 'react-router-dom';

const VideoBanner = () => {
    return (
        <section className="tg-video-area tg-video-bg jarallax parallax-img py-20">
            <div className="container">
                <div className="row align-items-center justify-content-center ">
                    <div className="col-xl-7 col-lg-6">
                        <div className="tg-video-img wow fadeInLeft" data-wow-delay=".2s">
                            <img src="/images/video_img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="tg-video-content wow fadeInRight" data-wow-delay=".2s">
                            <div className="tg-section-title white mb-30">
                                <span className="sub-title">promotional</span>
                                <h2 className="title white-text">Elevate Your Fitness with Speed</h2>
                            </div>
                            <p className="info-one">Unlock your full potential with Speed's premium supplements. Boost muscle growth, enhance performance, and speed up recovery with our scientifically formulated products. Experience maximum results and take your fitness journey to the next level with Speed today!.</p>
                            <Link to="/about" className="tg-btn">VIEW more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoBanner;
