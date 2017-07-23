import React from 'react';

import Atom from '../../assets/atom.svg';
import Container from '../Container';
import styles from './index.module.css';

const Header = () => (
  <footer className={styles.footer}>
    <Atom className={styles.logo} />
    <Container>
      <h2 className={styles.h2}>Written by <a href="//adamstegman.com" className={styles['nav-link']}>Adam Stegman</a></h2>
      <nav>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>
            <a href="//twitter.com/adamstegman" className={styles['nav-link']}>Follow me on Twitter</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="//github.com/adamstegman" className={styles['nav-link']}>Follow me on Github</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="//profiles.google.com/adam.stegman" rel="me" className={styles['nav-link']}>Google Profile</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="mailto:me@adamstegman.com" className={styles['nav-link']}>Email me</a>
          </li>
        </ul>
      </nav>
    </Container>
  </footer>
);

export default Header;
