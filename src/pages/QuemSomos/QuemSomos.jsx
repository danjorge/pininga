import React from 'react';
import styles from './QuemSomos.module.css';

const QuemSomos = () => {
    return (
        <div className={styles.container}>
            <h1>Quem Somos</h1>
            <div className={styles.content}>
                <section className={styles.intro}>
                    <p>Conheça a história e as pessoas por trás do Pininga.</p>
                </section>
            </div>
        </div>
    );
};

export default QuemSomos;
