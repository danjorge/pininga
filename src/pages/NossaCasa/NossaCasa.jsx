import React from 'react';
import styles from './NossaCasa.module.css';

const NossaCasa = () => {
    return (
        <div className={styles.container}>
            <h1>Nossa Casa</h1>
            <div className={styles.content}>
                <section className={styles.intro}>
                    <p>Bem-vindo ao Pininga, um espaço acolhedor onde tradição e modernidade se encontram.</p>
                </section>
            </div>
        </div>
    );
};

export default NossaCasa;
