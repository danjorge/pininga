import React from 'react';
import styles from './NossaGastronomia.module.css';

const NossaGastronomia = () => {
    return (
        <div className={styles.container}>
            <h1>Nossa Gastronomia</h1>
            <div className={styles.content}>
                <section className={styles.intro}>
                    <p>Descubra os sabores únicos da nossa culinária, onde cada prato conta uma história.</p>
                </section>
            </div>
        </div>
    );
};

export default NossaGastronomia;
