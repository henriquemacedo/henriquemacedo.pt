import React from 'react'
import PropTypes from 'prop-types'

import icons from '../ions/icons'

const Icon = props => (
  <svg viewBox="0 0 32 32">
    <path style={{ fill: props.fill }} d={icons[props.icon]} />
  </svg>
)

Icon.propTypes = {
  fill: PropTypes.string,
  icon: PropTypes.string.isRequired,
}

export default Icon
