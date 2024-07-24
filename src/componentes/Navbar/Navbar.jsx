import React from 'react';
import { Link } from 'react-scroll';
import styles from './NavbarStyle.module.css';
import logo from '/src/assets/logo.png';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles['navbar-logo']}>
        <img src={logo} alt="Logo" style={{ height: '65px' }} />
      </a>
      <ul className={styles['navbar-menu']}>
      <li className={styles['navbar-item']}>
          <Link to="servicios" className={styles['navbar-link']} smooth={true} duration={500}>
            Servicios
          </Link>
        </li>
        <li className={styles['navbar-item']}>
          <Link to="sobrenosotros" className={styles['navbar-link']} smooth={true} duration={500}>
            Sobre Nosotros
          </Link>
        </li>
        <li className={styles['navbar-item']}>
          <Link to="contacto" className={styles['navbar-link']} smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
