import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10vw;

  h1 {
    margin: 0 0 5vw 0;
    font-size: 2rem;
    font-weight: var(--bold, 700);
    color: var(--highlight, #e0be24);
  }
`

class Intro extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </Wrapper>
    )
  }
}

Intro.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Intro
