import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    // Jyare navigate thi home aaviye, pachhi ProductShowcase par scroll karo
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollToProduct) {
            const section = document.getElementById('product-showcase');
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                }, 100); // slight delay so page render thay
            }
            // state saaf karo
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Product link click handler
    const handleProductClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // Already home page par chhe to direct scroll karo
            const section = document.getElementById('product-showcase');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Bija page par chhe to home par navigate karo with state
            navigate('/', { state: { scrollToProduct: true } });
        }
    };

    // Mobile Product link click handler
    const handleMobileProductClick = (e: React.MouseEvent) => {
        closeMobileMenu();
        handleProductClick(e);
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
                                        <div className="logo h-16"> 
                                            <Link to="/">
                                                <img src="/images/logo-01.png" alt="Logo" className='h-full' />
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-md-flex">
                                            <ul className="navigation">
                                                <li className={isActive('/')}><Link to="/" className="section-link">Home</Link></li>
                                                <li><a href="#product-showcase" className="section-link" onClick={handleProductClick}>Product</a></li>
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
                            <li><a href="#product-showcase" onClick={handleMobileProductClick}>Product</a></li>
                            <li className={isActive('/about')}><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
                            <li className={isActive('/contact')}><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=+919511424676&text=Hello, I want to know more about your service."><i className="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={`menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
        </>
    );
};

export default Header;