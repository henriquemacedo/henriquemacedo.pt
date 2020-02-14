import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  padding: 0 5vw 5vw 5vw;

  @media ${device.s} {
    padding: 0 10vw 10vw 10vw;
  }

  h1 {
    margin: 60px 0;
    color: var(--highlight);
  }

  a {
    border-bottom: 1px solid var(--grey);
    color: var(--white, #ededed);

    &:hover {
      border-color: var(--highlight);
    }
  }
`

const Intro = ({ children }) => <Wrapper>{children}</Wrapper>

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Intro
