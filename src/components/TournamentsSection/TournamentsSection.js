import React from "react";
import "./TournamentsSection.css";

const TournamentsSection = () => {
    const tournaments = [
        {
            title: "Tournoi League of Legends",
            date: "22 Décembre 2023",
            prize: "10,000€",
            participants: 200,
        },
        {
            title: "Valorant Masters",
            date: "15 Janvier 2024",
            prize: "5,000€",
            participants: 150,
        },
        {
            title: "CS:GO Global Series",
            date: "8 Février 2024",
            prize: "15,000€",
            participants: 300,
        },
        {
            title: "DOTA 2 Invitational",
            date: "28 Février 2024",
            prize: "20,000€",
            participants: 250,
        },
    ];

    return (
        <section className="tournaments-section">
            <h2 className="tournaments-title">Tournois récents ou populaires</h2>
            <p className="tournaments-description">
                Découvrez les compétitions les plus passionnantes et rejoignez la communauté des joueurs eSport !
            </p>
            <div className="tournaments-grid">
                {tournaments.map((tournament, index) => (
                    <div className="tournament-card" key={index}>
                        <h3 className="tournament-title">{tournament.title}</h3>
                        <p className="tournament-date">📅 {tournament.date}</p>
                        <p className="tournament-prize">🏆 Récompense : {tournament.prize}</p>
                        <p className="tournament-participants">👥 Participants : {tournament.participants}</p>
                        <button className="tournament-cta">Rejoindre</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TournamentsSection;
