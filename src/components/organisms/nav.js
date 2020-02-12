import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../ions/breakpoints'

const Wrapper = styled.nav`
  border: 1px solid red;
  position: fixed;
  margin-top: 2vw;
  width: 100%;
  padding: 0 2vw;
  font-size: 0.75rem;
  font-weight: var(--bold, 700);
  text-transform: uppercase;
  z-index: 1;

  /* @media ${device.s} {
    font-size: 0.5rem;
  } */

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;

    li {
      border: 1px solid yellow;
      list-style: none;

      /* &:not(:last-child) {
        margin-right: 40px;
      } */

      a {
        /* position: relative; */
        color: var(--white, #ededed);
        text-decoration: none;
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        -o-transition: 0.2s;
        transition: 0.2s;

        &:hover {
          color: var(--highlight, #e0be24)
        }

        /* &.active {
          &:after {
            content: '';
            position: absolute;
            left: 5px;
            bottom: -5px;
            background-color: var(--highlight, #e0be24);
            width: 100%;
            height: 5px;
          }
        } */
      }
    }
  }
`

const Nav = () => (
  <Wrapper>
    <ul>
      <li>
        <Link activeClassName="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/blog">
          Blog
        </Link>
      </li>
    </ul>
  </Wrapper>
)

export default Nav
