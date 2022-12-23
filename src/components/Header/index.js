import React from 'react';
import { Link } from 'gatsby';

import { ReactComponent as Atom } from '../../assets/atom.svg';
import Container from '../Container';
import NavList from '../NavList';
import { h1, h2, header, headerLink, logo, navLink } from './index.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={header}>
        <Atom className={logo} />
        <Container>
          <hgroup>
            <h1 className={h1}>
              <Link
                to="/"
                className={headerLink}
              >
                {this.props.title}
              </Link>
            </h1>
            <h2 className={h2}>{this.props.subtitle}</h2>
          </hgroup>
          <NavList>
            <Link to="/" className={navLink}>Articles</Link>
            <a href="//adamstegman.com" className={navLink}>Adam Stegman</a>
            <a href="//twitter.com/adamstegman" className={navLink}>Twitter</a>
            <a href="//github.com/adamstegman" className={navLink} rel="me">Github</a>
          </NavList>
        </Container>
      </header>
    );
  }
}

export default Header;
