import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <main className="main-area fix">
            <section className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="breadcrumb-content text-center">
                                <h2 className="title">Contact Us</h2>
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item trail-item trail-begin">
                                            <Link to="/"><span>Home</span></Link>
                                        </li>
                                        <li className="breadcrumb-item trail-item trail-end"><span>Contact Us</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-area">
                <div className="container">
                    <div className="contact-box-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
                                <div className="contact-box">
                                    <div className="contact-icon">
                                        <span className="overlay-icon"><i className="fas fa-check"></i></span>
                                        <i className="far fa-map"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h5 className="title">Address</h5>
                                        <p className="contact-desc">Lucknow ,Uttar Pradesh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
                                <div className="contact-box">
                                    <div className="contact-icon">
                                        <span className="overlay-icon"><i className="fas fa-check"></i></span>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h5 className="title">Phone Number</h5>
                                        <p className="contact-desc">+91 9511424676</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-box">
                                    <div className="contact-icon">
                                        <span className="overlay-icon"><i className="fas fa-check"></i></span>
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h5 className="title">Connect</h5>
                                        <p className="contact-desc">nutradynehealthcare@gmail.com</p>
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

export default Contact;
