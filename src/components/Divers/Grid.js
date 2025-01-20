import React from 'react';

const Grid = () => {
    return (
        <div style={styles.gridContainer}>
            <div style={styles.line}>
                <div style={styles.content}>
                    <h3>Tournées à venir</h3>
                    <p>Découvrez les prochains tournois eSport à ne pas manquer.</p>
                </div>
            </div>
            <div style={styles.line}>
                <div style={styles.content}>
                    <h3>Jeux populaires</h3>
                    <p>Pariez sur vos jeux préférés : LoL, Valorant, CS:GO, etc.</p>
                </div>
            </div>
            <div style={styles.line}>
                <div style={styles.content}>
                    <h3>Pari en ligne</h3>
                    <p>Placez vos paris sur les matchs en direct et gagnez gros.</p>
                </div>
            </div>
            <div style={styles.line}>
                <div style={styles.content}>
                    <h3>Inscription</h3>
                    <p>Rejoignez la plateforme et commencez à participer aux tournois.</p>
                </div>
            </div>
            <div style={styles.line}>
                <div style={styles.content}>
                    <h3>Support</h3>
                    <p>Besoin d'aide ? Contactez notre support pour toutes questions.</p>
                </div>
            </div>
            <div style={styles.line}>
                <div style={styles.content}>
                    <h3>À propos</h3>
                    <p>Apprenez-en plus sur notre plateforme de tournois et de paris eSport.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    gridContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap', // Permet aux éléments de se répartir sur deux lignes
        justifyContent: 'space-between', // Espacement uniforme entre les éléments
        padding: '20px',
    },
    line: {
        display: 'flex',
        justifyContent: 'center', // Centrer le contenu horizontalement dans chaque ligne
        alignItems: 'center',     // Centrer verticalement si nécessaire
        flexDirection: 'column',
        width: 'calc(33.33% - 20px)', // 3 colonnes de largeur égale, avec un espacement
        marginBottom: '20px',      // Espacement entre les lignes
    },
    content: {
        textAlign: 'center',
        //backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fond sombre pour les sections de contenu
        padding: '20px',
        color: 'white',
        borderRadius: '8px',
        width: '90%', // Limiter la largeur du contenu
    }
};

export default Grid;
