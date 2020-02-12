import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  padding: 20vw 5vw;

  h1 {
    color: var(--highlight, #e0be24);
  }

  a {
    border-bottom: 1px solid var(--grey, #41505e);
    color: var(--white, #ededed);
    text-decoration: none;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      border-color: var(--highlight, #e0be24);
    }
  }

  @media ${device.s} {
    padding: 10vw;
  }
`

const Main = ({ children }) => <Wrapper>{children}</Wrapper>

Main.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Main
