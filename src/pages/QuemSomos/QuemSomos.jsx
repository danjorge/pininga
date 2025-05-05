import React from 'react';
import styles from './QuemSomos.module.css';
import quemSomosImage from '../../assets/images/Sessão 4 - QUEM SOMOS_20250422_104953_0000.jpg';

const QuemSomos = () => {
    return (
        <div className={styles.pageContainer}>
            <img
                src={quemSomosImage}
                alt="Quem Somos"
                className={styles.fullImage}
            />
        </div>
    );
};

export default QuemSomos;
