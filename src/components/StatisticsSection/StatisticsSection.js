import React, { useEffect } from "react";
import "./StatisticsSection.css";

const StatisticsSection = () => {
    // Données des statistiques
    const stats = [
        { value: 10000, label: "Tournois organisés", icon: "🏆" },
        { value: 1000000, label: "Gains distribués (€)", icon: "💰" },
        { value: 500000, label: "Joueurs actifs", icon: "🎮" },
    ];

    // Animation des compteurs
    useEffect(() => {
        const counters = document.querySelectorAll(".stat-value");

        counters.forEach((counter) => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-value");
                const count = +counter.innerText;
                const increment = target / 200;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };

            updateCount();
        });
    }, []);

    return (
        <section className="statistics-section">
            <h2 className="section-title">Découvrez nos incroyables résultats</h2>
            <p className="section-subtitle">
                Rejoignez des milliers de passionnés d'eSport à travers le monde et faites partie de cette aventure unique.
            </p>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div className="stat-card" key={index}>
                        <div className="stat-icon">{stat.icon}</div>
                        <h3 className="stat-value" data-value={stat.value}>
                            0
                        </h3>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatisticsSection;
