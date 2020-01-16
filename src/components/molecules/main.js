import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10vw;

  a {
    border-bottom: 1px solid var(--grey, #41505e);
    color: var(--white, #ededed);
    text-decoration: none;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;
  }

  a.active {
    color: red;
  }

  a:hover {
    border-color: var(--highlight, #e0be24);
  }
`

const Main = ({ children }) => <Wrapper>{children}</Wrapper>

Main.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Main
