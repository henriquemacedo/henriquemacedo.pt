import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/title.module.css'

class Title extends React.Component {
  render() {
    return <h1 className={styles.title}>{this.props.value}</h1>
  }
}

Title.propTypes = {
  value: PropTypes.string,
}

export default Title
