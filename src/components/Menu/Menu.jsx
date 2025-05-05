import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                handleClose();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleClose = () => {
        setIsClosing(true);
        document.body.style.overflow = '';
        
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            handleClose();
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = 'hidden';
        }
    };

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <button 
                    className={`${styles.hamburger} ${(isMenuOpen || isClosing) ? styles.open : ''} ${isScrolled ? styles.scrolled : ''}`} 
                    onClick={toggleMenu} 
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <NavLink 
                    to="/nossa-casa" 
                    className={`${styles.logo} ${isScrolled ? styles.scrolled : ''}`}
                >
                    Pininga Restaurante
                </NavLink>
            </div>
            
            {(isMenuOpen || isClosing) && (
                <>
                    <div className={styles.menuOverlay} onClick={handleClose} />
                    <div
                        ref={menuRef}
                        className={`${styles.menuContent} ${isClosing ? styles.closing : ''}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}>
                                <NavLink 
                                    to="/nossa-casa" 
                                    className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                                    onClick={handleClose}
                                >
                                    Nossa Casa
                                </NavLink>
                            </li>
                            <li className={styles.menuItem}>
                                <NavLink 
                                    to="/nossa-gastronomia" 
                                    className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                                    onClick={handleClose}
                                >
                                    Nossa Gastronomia
                                </NavLink>
                            </li>
                            <li className={styles.menuItem}>
                                <NavLink 
                                    to="/nossa-filosofia" 
                                    className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                                    onClick={handleClose}
                                >
                                    Nossa Filosofia
                                </NavLink>
                            </li>
                            <li className={styles.menuItem}>
                                <NavLink 
                                    to="/quem-somos" 
                                    className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                                    onClick={handleClose}
                                >
                                    Quem Somos Nós
                                </NavLink>
                            </li>
                            <li className={styles.menuItem}>
                                <NavLink 
                                    to="/contato" 
                                    className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                                    onClick={handleClose}
                                >
                                    Contato
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
}

export default Menu;
