import React from 'react';

import { button, buttonText, item, itemButton, list, menuHidden } from './index.module.css';

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
    const navListClassNames = [list];
    if (!this.state.expanded) {
      navListClassNames.push(menuHidden);
    }

    return (
      <nav>
        <button aria-expanded={this.state.expanded}
                aria-controls="nav-list"
                className={button}
                onClick={this.toggle}>
          <h3 className={buttonText}>
            {this.state.expanded ? 'Hide' : 'Show'} Navigation
          </h3>
        </button>
        <ul id="nav-list" className={navListClassNames.join(' ')}>
          {this.props.children.map((link, index) =>
            <li key={index} className={item}>
              <button className={itemButton} onClick={this.toggle}>{link}</button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default NavList;
