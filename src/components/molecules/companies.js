import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/companies.module.css'
import CompanyItem from '../atoms/companyItem'

class Companies extends React.Component {
  render() {
    const companyItem = this.props.values.map(value => (
      <CompanyItem key={value.key} logo={value.logo} name={value.name} />
    ))

    return (
      <div className={styles.companies}>
        <h2>{this.props.title}</h2>
        <div>{companyItem}</div>
      </div>
    )
  }
}

Companies.propTypes = {
  title: PropTypes.string,
  companyItem: PropTypes.array,
}

export default Companies
