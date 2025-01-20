import React from "react";
import "./Navbar.css"; // Créez un fichier CSS séparé pour les styles
import logoLOL from './logo-jeu/lol-logo.png';
import logoTFT from './logo-jeu/TFT_Logo.png';
import ValorantLogo from './logo-jeu/Valorant_logo.png';
import CSLogo from './logo-jeu/CS_logo.png';
import DOTA2Logo from './logo-jeu/dota2_logo.png';
import CODLogo from './logo-jeu/COD_logo.png';

const Navbar = () => {
    return (
        <div className="navbar-container">

            <div className="navbar-links">
                <img className="navbar-logo" src="https://via.placeholder.com/36x36" alt="Logo" />
                <div className="navbar-title">eTournois</div>
            </div>
            <div className="navbar-menu">
                <img className="navbar-menu-logo-lol" src={logoLOL} alt="League of legends" />
                <img className="navbar-menu-logo-valorant" src={ValorantLogo} alt="Valorant" />
                <img className="navbar-menu-logo-cs" src={CSLogo} alt="Counter Strike" />
                <img className="navbar-menu-logo-dota2" src={DOTA2Logo} alt="DOTA2" />
                <img className="navbar-menu-logo-valorant" src={CODLogo} alt="Valorant" />
                <img className="navbar-menu-logo-tft" src={logoTFT} alt="Teamfight Tactics" />
            </div>
            <div className="navbar-actions">
                <div className="navbar-login">Connexion</div>
                <div className="navbar-trial">
                    <div className="trial-background" />
                    <div className="trial-text">Jeton gratuit</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
