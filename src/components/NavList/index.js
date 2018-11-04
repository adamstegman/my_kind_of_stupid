import React from 'react';

import styles from './index.module.css';

class NavList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    const navListClassNames = [styles.list];
    if (!this.state.expanded) {
      navListClassNames.push(styles.menuHidden);
    }

    return (
      <nav>
        <button aria-expanded={this.state.expanded}
                aria-controls="nav-list"
                className={styles.button}
                onClick={this.toggle}>
          <h3 className={styles.buttonText}>
            {this.state.expanded ? 'Hide' : 'Show'} Navigation
          </h3>
        </button>
        <ul id="nav-list" className={navListClassNames.join(' ')}>
          {this.props.children.map((link, index) =>
            <li key={index} className={styles.item} onClick={this.toggle}>{link}</li>
          )}
        </ul>
      </nav>
    );
  }
}

export default NavList;
