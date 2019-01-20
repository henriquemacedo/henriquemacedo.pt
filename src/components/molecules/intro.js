import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/intro.module.css'

class Intro extends React.Component {
  render() {
    return (
      <div className={styles.intro}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}

Intro.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Intro
