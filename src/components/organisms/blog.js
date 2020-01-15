import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10vw;
`

const Blog = ({ title, children }) => (
  <Wrapper>
    <h1>{title}</h1>
    {children}
  </Wrapper>
)

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Blog
