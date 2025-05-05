import React from 'react';
import styles from './NossaFilosofia.module.css';

const NossaFilosofia = () => {
    return (
        <div className={styles.container}>
            <h1>Nossa Filosofia</h1>
            <div className={styles.content}>
                <section className={styles.intro}>
                    <p>Conheça os valores e princípios que guiam nossa jornada gastronômica.</p>
                </section>
            </div>
        </div>
    );
};

export default NossaFilosofia;
