import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CompanyItem from '../atoms/companyItem'
import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  padding: 0 10vw;

  h2 {
    margin: 0 0 10vw 0;
    font-size: 1rem;
    font-weight: var(--light, 300);
    color: var(--grey, #41505e);
  }

  > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10vw;
    text-align: center;
  }

  @media ${device.s} {
    h2 {
      margin: 0 0 2vw 0;
    }

    > div {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-gap: 5vw;
    }
  }
`

class Companies extends React.Component {
  render() {
    const companyItem = this.props.values.map(value => (
      <CompanyItem key={value.key} logo={value.logo} name={value.name} />
    ))

    return (
      <Wrapper>
        <h2>{this.props.title}</h2>
        <div>{companyItem}</div>
      </Wrapper>
    )
  }
}

Companies.propTypes = {
  title: PropTypes.string,
  companyItem: PropTypes.array,
}

export default Companies
