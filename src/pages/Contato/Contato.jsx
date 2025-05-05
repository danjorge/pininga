import React from 'react';
import styles from './Contato.module.css';
import contatoImage from '../../assets/images/Sessão 5 - Contato - DOC-20250422-WA0018.jpg';

const Contato = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.imageContainer}>
                <img
                    src={contatoImage}
                    alt="Contato"
                    className={styles.fullImage}

                />
                <a
                    href="https://www.instagram.com/pininga_restaurante/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.instagramLink} ${styles.link1}`}
                    aria-label="Instagram Pininga"
                >
                    <span className={styles.clickableArea}></span>
                </a>
                <a
                    href="https://www.tripadvisor.com.br/Restaurant_Review-g3750531-d17837448-Reviews-Pininga_Restaurante-Atins_Barreirinhas_State_of_Maranhao.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.instagramLink} ${styles.link2}`}
                    aria-label="TripAdvisor Pininga"
                >
                    <span className={styles.clickableArea}></span>
                </a>
                <a
                    href="https://wa.me/5598991820471?fbclid=PAZXh0bgNhZW0CMTEAAad-vZRTVS919yO_zpCo2GFycrkcnEIl5kP4M1syd3TCVauKpuY5U4paPHWVXg_aem_hDfJY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.instagramLink} ${styles.link3}`}
                    aria-label="WhatsApp Pininga"
                >
                    <span className={styles.clickableArea}></span>
                </a>
                <a
                    href="https://g.co/kgs/fpg7j8j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.instagramLink} ${styles.link4}`}
                    aria-label="Google Maps Pininga"
                >
                    <span className={styles.clickableArea}></span>
                </a>
            </div>
        </div>
    );
};

export default Contato;
