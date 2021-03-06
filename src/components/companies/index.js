import React from 'react'
import PropTypes from 'prop-types'
import * as Styles from "./styles"

const Companies = ({ title, values }) => {
  const companyItem = values.map((value, index) => (
    <Styles.Logo key={index}>
      <img src={value.logo} alt={value.name} />
    </Styles.Logo>
  ))

  return (
    <Styles.Wrapper>
      <h2>{title}</h2>
      <div>{companyItem}</div>
    </Styles.Wrapper>
  )
}

Companies.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
}

export default Companies
