import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import Features from '../components/home/Features';
import Ingredients from '../components/home/Ingredients';
import VideoBanner from '../components/home/VideoBanner';
import ProductShowcase from '../components/home/ProductShowcase';
import Benefits from '../components/home/Benefits';
import Faq from '../components/home/Faq';
import Testimonials from '../components/home/Testimonials';


const Home = () => {
    useEffect(() => {
        
        if (typeof window.WOW === 'function') {
        
            new window.WOW({ live: false }).init();
        }
    }, []);

    return (
        <>
            <HeroSection />
            <Features />
            <Ingredients />
            <VideoBanner />
            <ProductShowcase />
            <Benefits />
            <Faq />
            <Testimonials />
        </>
    );
};

export default Home;
