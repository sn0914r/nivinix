
import Header from "../../components/common/Header"
import HeroSection from "../../components/common/Hero"
import AboutSection from "../../components/common/AboutSection"
import ServicesSection from "../../components/common/ServicesSection"
import PortfolioSection from "../../components/common/PortifolioSection"
import TestimonialsSection from "../../components/common/TestimonialsSection"
import ContactSection from "../../components/common/ContactUs";
import Footer from "../../components/common/Footer";
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