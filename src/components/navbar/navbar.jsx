import React from 'react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import styles from './Navbar.module.css'; // Importa el archivo CSS Module

const Navbar = ({ onViewChange }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.shellIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C7.35 0 3.5 3.85 3.5 8.5C3.5 13.15 12 24 12 24C12 24 20.5 13.15 20.5 8.5C20.5 3.85 16.65 0 12 0ZM12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12Z" fill="#faea0b"/>
          </svg>
        </div>
        <h1 className={styles.navbarTitle}>Santiagín</h1>
        <div className={styles.shellIcon} style={{ visibility: 'hidden' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C7.35 0 3.5 3.85 3.5 8.5C3.5 13.15 12 24 12 24C12 24 20.5 13.15 20.5 8.5C20.5 3.85 16.65 0 12 0ZM12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12Z" fill="#faea0b"/>
          </svg>
        </div>
      </div>
      <div className={styles.navbarIcons}>
        <button onClick={() => onViewChange('map')} className={styles.navbarButton} title="Mapa">
          Mapa
        </button>
        <button onClick={() => onViewChange('register')} className={styles.navbarButton} title="Registro de Alojamientos">
          Registro
        </button>
        <FaSignOutAlt className={styles.icon} title="Logout" />
      </div>
    </nav>
  );
};

export default Navbar;
