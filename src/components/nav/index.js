import React from 'react';
import { Link } from 'gatsby';
import * as Styles from './styles';

const Nav = () => (
  <Styles.Wrapper>
    <ul>
      <li>
        <Link activeClassName="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/blog">
          Blog
        </Link>
      </li>
    </ul>
  </Styles.Wrapper>
);

export default Nav;
