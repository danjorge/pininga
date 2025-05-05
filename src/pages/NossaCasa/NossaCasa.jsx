import React from 'react';
import styles from './NossaCasa.module.css';
import nossaCasaImage from '../../assets/images/Sessão 1 - NOSSA CASA_20250422_233155_0000.jpg';

const NossaCasa = () => {
    return (
        <div className={styles.pageContainer}>
            <img
                src={nossaCasaImage}
                alt="Nossa Casa"
                className={styles.fullImage}
            />
        </div>
    );
};

export default NossaCasa;
