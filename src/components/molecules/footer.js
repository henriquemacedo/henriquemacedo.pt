import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { device } from '../ions/breakpoints'

const Wrapper = styled.div`
  padding: 10vw;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li:not(:last-child) {
      margin-right: 2vw;
    }
  }

  @media ${device.s} {
    ul li {
      display: inline;
      font-size: 0.8rem;
    }
  }
`

class Footer extends React.Component {
  render() {
    const footerLinks = this.props.values.map(value => (
      <li key={value.key}>
        <a href={value.link} target="_blank" rel="noopener noreferrer">
          {value.name}
        </a>
      </li>
    ))

    return (
      <Wrapper>
        <ul>{footerLinks}</ul>
      </Wrapper>
    )
  }
}

Footer.propTypes = {
  key: PropTypes.number,
  link: PropTypes.string,
  name: PropTypes.string,
  footerLinks: PropTypes.array,
}

export default Footer
