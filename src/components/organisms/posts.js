import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 60px auto 0 auto;
  max-width: 800px;
  padding: 0 5vw;
  color: var(--grey);
`

const Intro = ({ children }) => <Wrapper>{children}</Wrapper>

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Intro
