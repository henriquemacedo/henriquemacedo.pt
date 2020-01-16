import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-width: 30vw;
    max-height: 50px;
  }

  @media ${device.s} {
    img {
      max-width: none;
    }
  }
`

function CompanyItem({ logo, name }) {
  return (
    <Wrapper>
      <img src={logo} alt={name} />
    </Wrapper>
  )
}

CompanyItem.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
}

export default CompanyItem
