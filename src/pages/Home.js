import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import About from '../components/Divers/About';
import TournamentsSection from "../components/TournamentsSection/TournamentsSection";
import HowItWorksSection from "../components/HowItWorksSection/HowItWorksSection";
import PopularGamesSection from "../components/PopularGamesSection/PopularGamesSection";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import Footer from "../components/Footer/Footer";
import CTASection from "../components/CTA/CTASection";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <TournamentsSection />
            <HowItWorksSection />
            <CTASection />
            <PopularGamesSection />
            <StatisticsSection />
            <TestimonialsSection />
            <Footer />
        </div>
    );
};

export default Home;
