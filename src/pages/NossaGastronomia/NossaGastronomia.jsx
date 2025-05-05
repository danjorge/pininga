import React from 'react';
import styles from './NossaGastronomia.module.css';
import nossaGastronomiaImage from '../../assets/images/Sessão 2 - NOSSA GASTRONOMIA_20250422_232233_0000.jpg';

const NossaGastronomia = () => {
    return (
        <div className={styles.pageContainer}>
            <img
                src={nossaGastronomiaImage}
                alt="Nossa Gastronomia"
                className={styles.fullImage}
            />
        </div>
    );
};

export default NossaGastronomia;
