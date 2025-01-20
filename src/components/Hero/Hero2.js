import React from 'react';
import './Hero2.css';
import Hero2 from '../../Media/hero2.png';
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="image-container">
                    <img className="background-image" src={Hero2} alt="Tournament" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
