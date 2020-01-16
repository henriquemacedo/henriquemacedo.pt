import React from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
