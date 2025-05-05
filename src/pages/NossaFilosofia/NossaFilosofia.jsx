import React from 'react';
import styles from './NossaFilosofia.module.css';
import nossaFilosofiaImage from '../../assets/images/Sessão 3 - NOSSA FILOSOFIA_20250422_104908_0000.jpg';

const NossaFilosofia = () => {
    return (
        <div className={styles.pageContainer}>
            <img
                src={nossaFilosofiaImage}
                alt="Nossa Filosofia"
                className={styles.fullImage}
            />
        </div>
    );
};

export default NossaFilosofia;
