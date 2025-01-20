import React from "react";
import "./Hero.css";
import Hero2 from '../../Media/hero2.png';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-image-container">
                <img src={Hero2} alt="Hero Background" className="hero-image" />
            </div>
            <div className="hero-content">
                <div className="hero-subtitle">Rejoignez la compétition</div>
                <h1 className="hero-title">Participer aux meilleurs tournois d'eSport</h1>
                <p className="hero-description">
                    Gagnez des récompenses incroyables et pariez sur vos équipes préférées dans vos jeux favoris : LoL, Valorant, CS:GO, et bien plus !
                </p>
                <div className="hero-buttons">
                    <button className="hero-cta-primary">Créer un tournoi</button>
                    <button className="hero-cta-secondary">Parier maintenant</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
