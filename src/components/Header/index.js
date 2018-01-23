import React from 'react';
import Link from 'gatsby-link';

import styles from './index.module.css';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.h1}>
        <Link
          to="/"
          className={styles.link}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
