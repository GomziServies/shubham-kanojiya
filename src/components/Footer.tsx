import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-style-two">
            <div className="footer-two-top-wrap">
                <div className="container">
                    <div className="footer-two-widgets-wrap">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="footer-about">
                                        <div className="footer-logo logo">
                                            <Link to="/"><img src="/images/logo-01-white.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="footer-text">
                                            <p>Elevate your fitness journey with Nutradyne's premium supplements for strength, muscle growth, and recovery.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget widget_nav_menu ">
                                    <h4 className="fw-title">links</h4>
                                    <ul className="list-wrap ">
                                        <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                                        <li><a href="#product-showcase" style={{ textDecoration: 'none' }}>Product</a></li>
                                        <li><Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link></li>
                                        <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Social Media</h4>
                                    <div className="footer-confidential-wrap">
                                        <div className="confidential-logo">
                                            <img src="/images/satisfaction_img.png" alt="img" />
                                        </div>
                                        <div className="confidential-content">
                                            <h4 className="con-title">100% Confidential</h4>
                                            <span>25k Active Customer</span>
                                        </div>
                                    </div>
                                    <div className="footer-social">
                                        <a href="#" style={{ textDecoration: 'none' }}><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" style={{ textDecoration: 'none' }}><i className="fab fa-instagram"></i></a>
                                        <a href="https://api.whatsapp.com/send?phone=+919511424676&text=Hello, I want to know more about your service." style={{ textDecoration: 'none' }}><i className="fab fa-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
