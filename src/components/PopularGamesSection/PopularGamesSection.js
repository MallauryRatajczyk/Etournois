import React from "react";
import "./PopularGamesSection.css";

const PopularGamesSection = () => {
    const games = [
        { name: "League of Legends", logo: "/images/lol_logo.png" },
        { name: "Valorant", logo: "/images/Valorant_logo.png" },
        { name: "CS:GO", logo: "/images/CS_logo.png" },
        { name: "DOTA 2", logo: "/images/dota2_logo.png" },
    ];

    return (
        <section className="popular-games-section">
            <h2 className="section-title">Jeux populaires</h2>
            <p className="section-description">
                Pariez sur vos jeux préférés ou participez à des tournois excitants sur les jeux les plus populaires de l'eSport.
            </p>
            <div className="games-grid">
                {games.map((game, index) => (
                    <div className="game-card" key={index}>
                        <img src={game.logo} alt={game.name} className={`game-logo ${game.name === "CS:GO" ? "invert-color" : ""}`} />
                        <p className="game-name">{game.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularGamesSection;
