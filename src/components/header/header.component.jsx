import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

export const Header = () => {
  return (
    <header className='App-header'>
      <nav className='indigo' style={{ padding: '0 10px' }}>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            Logo
          </Link>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Sass</a>
            </li>
            <li>
              <a href='badges.html'>Components</a>
            </li>
            <li>
              <a href='collapsible.html'>Javascript</a>
            </li>
            <li>
              <a href='mobile.html'>Mobile</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='sass.html'>Sass</a>
        </li>
        <li>
          <a href='badges.html'>Components</a>
        </li>
        <li>
          <a href='collapsible.html'>Javascript</a>
        </li>
        <li>
          <a href='mobile.html'>Mobile</a>
        </li>
      </ul>
    </header>
  );
};
