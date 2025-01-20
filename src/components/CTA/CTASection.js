import React from "react";
import "./CTASection.css";

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2 className="cta-title">Prêt à entrer dans l’arène ?</h2>
                <p className="cta-subtitle">
                    Rejoignez notre communauté et participez aux meilleurs tournois d’eSport dès maintenant.
                </p>
                <div className="cta-buttons">
                    <button className="cta-button-primary">Créer un tournoi</button>
                    <button className="cta-button-secondary">S’inscrire</button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
