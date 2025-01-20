import React from "react";
import "./Footer.css"; // Assurez-vous d'ajouter ce fichier CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-logo">
                    <h3>ETournois</h3>
                    <p>La meilleure plateforme pour l'e-sport et les paris en ligne</p>
                </div>
                <div className="footer-links">
                    <h4>Liens rapides</h4>
                    <ul>
                        <li><a href="/about">À propos</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/terms">Termes et conditions</a></li>
                        <li><a href="/privacy">Politique de confidentialité</a></li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h4>Abonnez-vous à notre newsletter</h4>
                    <form>
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="newsletter-input"
                        />
                        <button type="submit" className="newsletter-btn button-primary">
                            S'abonner
                        </button>
                    </form>
                </div>
                <div className="footer-socials">
                    <h4>Suivez-nous</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 ETournois. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
