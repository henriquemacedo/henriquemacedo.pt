import React from 'react'
import PropTypes from 'prop-types'

function CompanyItem({ logo, name }) {
  return (
    <div>
      <img src={logo} alt={name} />
    </div>
  )
}

CompanyItem.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
}

export default CompanyItem
