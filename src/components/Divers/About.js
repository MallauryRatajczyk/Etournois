import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2 className="about-title">Pourquoi choisir eTournois ?</h2>
                <p className="about-description">
                    eTournois est la plateforme ultime pour les passionnés de jeux vidéo.
                    Organisez vos propres compétitions, participez aux meilleurs
                    tournois eSport, et pariez sur vos équipes préférées.
                </p>
                <ul className="features-list">
                    <li>Organisez des tournois facilement</li>
                    <li>Des jeux populaires comme LoL, Valorant, CS:GO</li>
                    <li>Gagnez des récompenses incroyables</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
