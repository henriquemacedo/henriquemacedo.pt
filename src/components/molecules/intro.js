import React from 'react'
// import PropTypes from 'prop-types'

import styles from '../../styles/intro.module.css'

class Intro extends React.Component {
  render() {
    return <div className={styles.intro}>{this.props.children}</div>
  }
}

// Title.propTypes = {
//   value: PropTypes.string,
// }

export default Intro
