import React from 'react'
import PropTypes from 'prop-types'

import '../styles/layout.module.css'

class Layout extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
