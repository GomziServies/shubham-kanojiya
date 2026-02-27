import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main className="main-area fix">
            <section className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="breadcrumb-content text-center">
                                <h2 className="title">About Us</h2>
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item trail-item trail-begin">
                                            <Link to="/"><span>Home</span></Link>
                                        </li>
                                        <li className="breadcrumb-item trail-item trail-end">
                                            <span>About Us</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-area" style={{ paddingBlock: 'clamp(60px, 10vw, 120px)' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="blog--post--item">
                                <div className="blog--post--content blog-details-content">
                                    <h2 className="blog--post--title">
                                        
                                        Nutradyne NUTRITION - Powering Your Performance
                                    </h2>
                                    <div className="post-text">
                                        <p>
                                            At Nutradyne NUTRITION, we're redefining the way athletes, bodybuilders, and fitness enthusiasts fuel their goals. Our scientifically formulated whey protein is crafted from premium-quality ingredients to deliver fast-absorbing protein, rich amino acids, and superior taste - so you get the results you train for.
                                        </p>
                                        <p>
                                            Whether you're building lean muscle, improving recovery, or boosting overall strength, Nutradyne NUTRITION stands for purity, potency, and performance. Every scoop is tested for quality and safety, ensuring you get a clean, high-protein supplement with no unnecessary fillers - just pure nutrition to accelerate your progress.
                                        </p>
                                        <div className="blog-details-wrap">
                                            <p>
                                                With bold flavors, smooth mixability, and industry-leading standards, Nutradyne NUTRITION isn't just a supplement - it's your partner in performance.
                                            </p>
                                        </div>
                                        <div className="blog-details-wrap">
                                            <p>
                                                Fuel your ambition. Build your strength. Experience the Nutradyne difference.
                                            </p>
                                        </div>
                                        <div className="blog-details-wrap">
                                            <h3 className="title">Nutradyne Nutrition - Science. Strength. Success.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
