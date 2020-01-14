import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Layout = ({ children }) => (
  <div>
    <header>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/blog">Writing</ListLink>
      </ul>
    </header>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
