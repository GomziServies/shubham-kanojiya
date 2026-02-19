import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Helper to determine if link is active
    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <>
            <button className={`scroll-top scroll-to-target scroll-top-two ${isSticky ? 'open' : ''} flex items-center justify-center`} data-target="html" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <i className="fas fa-angle-up"></i>
            </button>
            <header id="home">
                <div id="header-fixed-height" className={isSticky ? 'active-height' : ''}></div>
                <div id="sticky-header" className={`tg-menu-area menu-area ${isSticky ? 'sticky-menu' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler d-md-none" onClick={toggleMobileMenu}>
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link to="/">
                                                <img src="/images/logo-01.png" alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-md-flex">
                                            <ul className="navigation">
                                                <li className={isActive('/')}><Link to="/" className="section-link">Home</Link></li>
                                                <li className={isActive('/products')}><Link to="/products" className="section-link">Product</Link></li>
                                                <li className={isActive('/about')}><Link to="/about" className="section-link">About Us</Link></li>
                                                <li className={isActive('/contact')}><Link to="/contact" className="section-link">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <nav className="menu-box">
                    <div className="close-btn" onClick={closeMobileMenu}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="nav-logo">
                        <Link to="/" onClick={closeMobileMenu}>
                            <img src="/images/logo-01.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <ul className="navigation">
                            <li className={isActive('/')}><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                            <li className={isActive('/products')}><Link to="/products" onClick={closeMobileMenu}>Product</Link></li>
                            <li className={isActive('/about')}><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
                            <li className={isActive('/contact')}><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=+919833897063&text=Hello, I want to know more about your service."><i className="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={`menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
        </>
    );
};

export default Header;
