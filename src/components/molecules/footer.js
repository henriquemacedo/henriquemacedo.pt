import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../atoms/icon'

const Wrapper = styled.div`
  padding: 10vw;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      width: 30px;
      height: 30px;

      &:not(:last-child) {
        margin-right: 20px;
      }

      svg {
        width: 30px;
        height: 30px;
        fill: var(--grey, #41505e);
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        -o-transition: 0.2s;
        transition: 0.2s;
      }

      &:hover {
        svg {
          fill: var(--white, #ededed);
        }
      }
    }
  }
`

class Footer extends React.Component {
  render() {
    const footerLinks = this.props.values.map(value => (
      <li key={value.key}>
        <a
          href={value.link}
          title={value.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={value.icon} />
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
