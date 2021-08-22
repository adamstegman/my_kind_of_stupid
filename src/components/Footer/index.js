import React from 'react';

import { ReactComponent as Atom } from '../../assets/atom.svg';
import Container from '../Container';
import { footer, h2, logo, navItem, navLink, navList } from './index.module.css';

const Footer = () => (
  <footer className={footer}>
    <Atom className={logo} />
    <Container>
      <h2 className={h2}>Written by <a href="//adamstegman.com" className={navLink}>Adam Stegman</a></h2>
      <nav>
        <ul className={navList}>
          <li className={navItem}>
            <a href="//twitter.com/adamstegman" className={navLink}>Follow me on Twitter</a>
          </li>
          <li className={navItem}>
            <a href="//github.com/adamstegman" className={navLink}>Follow me on Github</a>
          </li>
          <li className={navItem}>
            <a href="//profiles.google.com/adam.stegman" rel="me" className={navLink}>Google Profile</a>
          </li>
          <li className={navItem}>
            <a href="mailto:me@adamstegman.com" className={navLink}>Email me</a>
          </li>
        </ul>
      </nav>
    </Container>
  </footer>
);

export default Footer;
