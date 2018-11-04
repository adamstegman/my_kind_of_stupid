import React from 'react';

import { ReactComponent as Atom } from '../../assets/atom.svg';
import Container from '../Container';
import styles from './index.module.css';

const Header = () => (
  <footer className={styles.footer}>
    <Atom className={styles.logo} />
    <Container>
      <h2 className={styles.h2}>Written by <a href="//adamstegman.com" className={styles.navLink}>Adam Stegman</a></h2>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="//twitter.com/adamstegman" className={styles.navLink}>Follow me on Twitter</a>
          </li>
          <li className={styles.navItem}>
            <a href="//github.com/adamstegman" className={styles.navLink}>Follow me on Github</a>
          </li>
          <li className={styles.navItem}>
            <a href="//profiles.google.com/adam.stegman" rel="me" className={styles.navLink}>Google Profile</a>
          </li>
          <li className={styles.navItem}>
            <a href="mailto:me@adamstegman.com" className={styles.navLink}>Email me</a>
          </li>
        </ul>
      </nav>
    </Container>
  </footer>
);

export default Header;
