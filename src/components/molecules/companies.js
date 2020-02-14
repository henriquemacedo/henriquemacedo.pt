import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CompanyItem from '../atoms/companyItem'
import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  padding: 30px 5vw 60px 5vw;

  @media ${device.s} {
    padding: 0 10vw 10vw 10vw;
  }

  h2 {
    margin: 0 0 30px 0;
    font-size: 1rem;
    color: var(--grey, #41505e);
  }

  > div {
    display: grid;
    /* grid-template-columns: 1fr; */
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 30px;
    text-align: center;
  }

  @media ${device.s} {
    h2 {
      font-size: 12px;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    > div {
      /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
      grid-gap: 5vw;
    }
  }
`

const Companies = ({ title, values }) => {
  const companyItem = values.map((value, index) => (
    <CompanyItem key={index} logo={value.logo} name={value.name} />
  ))

  return (
    <Wrapper>
      <h2>{title}</h2>
      <div>{companyItem}</div>
    </Wrapper>
  )
}

Companies.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
}

export default Companies
