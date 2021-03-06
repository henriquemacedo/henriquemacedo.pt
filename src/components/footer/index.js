import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import * as Styles from "./styles";

const Footer = ({ values }) => {
  const footerLinks = values.map(value => (
    <li key={value.key}>
      <a
        href={value.link}
        title={value.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={value.icon} />
      </a>
    </li>
  ))

  return (
    <Styles.Wrapper>
      <ul>{footerLinks}</ul>
    </Styles.Wrapper>
  )
}

Footer.propTypes = {
  values: PropTypes.array,
}

export default Footer
