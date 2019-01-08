import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/footer.module.css'

class Footer extends React.Component {
  render() {
    const footerLinks = this.props.values.map(value => (
      <li key={value.key}>
        <a href={value.link} target="_blank" rel="noopener noreferrer">
          {value.name}
        </a>
      </li>
    ))

    return (
      <footer className={styles.footer}>
        <ul>{footerLinks}</ul>
      </footer>
    )
  }
}

Footer.propTypes = {
  key: PropTypes.number,
  link: PropTypes.string,
  name: PropTypes.string,
}

export default Footer
