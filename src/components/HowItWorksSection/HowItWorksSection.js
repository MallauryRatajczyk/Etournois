import React from "react";
import "./HowItWorksSection.css";

const HowItWorksSection = () => {
    const steps = [
        {
            title: "Créer un compte",
            description: "Inscrivez-vous gratuitement en quelques étapes simples pour rejoindre la communauté.",
            icon: "💻", // Emoji ou icône à remplacer par un fichier d'icône si nécessaire
        },
        {
            title: "Choisir un tournoi",
            description: "Sélectionnez un tournoi parmi nos compétitions en ligne, selon votre jeu préféré.",
            icon: "🏆",
        },
        {
            title: "Participez ou pariez",
            description: "Rejoignez le tournoi en tant que joueur ou placez vos paris sur vos équipes favorites.",
            icon: "🎮",
        },
        {
            title: "Gagnez des récompenses",
            description: "Collectez vos gains et récompenses après chaque victoire ou pari réussi.",
            icon: "💰",
        },
    ];

    return (
        <section className="how-it-works">
            <h2 className="section-title">Comment ça marche ?</h2>
            <div className="steps">
                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <div className="step-icon">{step.icon}</div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorksSection;
