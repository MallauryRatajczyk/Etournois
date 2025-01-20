import React, { useState, useEffect } from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Alex Dupont",
            role: "Joueur professionnel",
            text: "J'ai participé à plusieurs tournois sur cette plateforme, et l'expérience a été incroyable. Organisation parfaite et récompenses à la hauteur !",
            photo: "/images/testimonial1.jpg",
        },
        {
            name: "Marie Dubois",
            role: "Fan d'eSport",
            text: "Parier sur mes équipes préférées n'a jamais été aussi excitant. J'adore suivre les matchs en direct et soutenir mes joueurs favoris.",
            photo: "/images/testimonial2.jpg",
        },
        {
            name: "John Doe",
            role: "Organisateur de tournois",
            text: "Grâce à cette plateforme, j'ai pu organiser des tournois avec une grande visibilité. Une communauté active et un support exceptionnel.",
            photo: "/images/testimonial3.jpg",
        },
        {
            name: "Emma Roux",
            role: "Streameuse eSport",
            text: "Une expérience fluide et conviviale. J'aime la façon dont les tournois sont gérés avec professionnalisme.",
            photo: "/images/testimonial4.jpg",
        },
    ];

    const itemsPerPage = 2; // Nombre de témoignages visibles par page
    const totalPages = Math.ceil(testimonials.length / itemsPerPage); // Nombre total de pages
    const [currentPage, setCurrentPage] = useState(0);

    // Passage à la page suivante en boucle
    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    // Passage à la page précédente en boucle
    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    // Effet pour faire défiler automatiquement toutes les 5 secondes
    useEffect(() => {
        const intervalId = setInterval(handleNext, 5000); // Change de page toutes les 5 secondes
        return () => clearInterval(intervalId); // Nettoyage de l'intervalle à la destruction du composant
    }, []);

    // Calcul pour afficher uniquement les témoignages de la page actuelle
    const startIndex = currentPage * itemsPerPage;
    const displayedTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="testimonials-section">
            <h2 className="section-title">Ce qu'ils disent de nous</h2>
            <div className="testimonials-container">
                <div
                    className="testimonials-grid"
                    style={{
                        transform: `translateX(-${currentPage * (50 + 30)}%)`, // Déplacement horizontal prenant en compte l'écart
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="testimonial-photo"
                            />
                            <h3 className="testimonial-name">{testimonial.name}</h3>
                            <p className="testimonial-role">{testimonial.role}</p>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination">
                <button onClick={handlePrev}>
                    Précédent
                </button>
                <button onClick={handleNext}>
                    Suivant
                </button>
            </div>
        </section>
    );
};

export default TestimonialsSection;
