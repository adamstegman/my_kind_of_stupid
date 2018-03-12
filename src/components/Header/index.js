import React from 'react';
import Link from 'gatsby-link';

import Atom from '../../assets/atom.svg';
import Container from '../Container';
import NavList from '../NavList';
import styles from './index.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Atom className={styles.logo} />
        <Container>
          <hgroup>
            <h1 className={styles.h1}>
              <Link
                to="/"
                className={styles['header-link']}
              >
                {this.props.title}
              </Link>
            </h1>
            <h2 className={styles.h2}>{this.props.subtitle}</h2>
          </hgroup>
          <NavList>
            <Link to="/" className={styles['nav-link']}>Articles</Link>
            <a href="//adamstegman.com" className={styles['nav-link']}>Adam Stegman</a>
            <a href="//twitter.com/adamstegman" className={styles['nav-link']}>Twitter</a>
            <a href="//github.com/adamstegman" className={styles['nav-link']}>Github</a>
          </NavList>
        </Container>
      </header>
    );
  }
}

export default Header;
