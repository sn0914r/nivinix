import Header from "../components/Header"
import HeroSection from "../components/Hero"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import PortfolioSection from "../components/PortifolioSection"
import TestimonialsSection from "../components/Testimonials"
import ContactSection from "../components/ContactUs"
import Footer from "../components/Footer"
export default function LandingPage() {
    return (
        <>
            <Header/>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <PortfolioSection/>
            <TestimonialsSection/>
            <ContactSection/>
            <Footer/>
        </>
    )
}