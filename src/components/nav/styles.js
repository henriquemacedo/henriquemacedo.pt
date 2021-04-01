import styled from 'styled-components';
import { device } from '@utils/breakpoints';

export const Wrapper = styled.nav`
  background-color: var(--bg);
  border-bottom: 1px solid var(--grey);
  position: fixed;
  width: 100%;
  padding: 5vw;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  z-index: 1;

  @media ${device.s} {
    padding: 2vw;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      position: relative;
      list-style: none;

      a {
        color: var(--white);
        text-decoration: none;
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        -o-transition: 0.2s;
        transition: 0.2s;

        &.active {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -8px;
            margin-left: 50%;
            transform: translateX(-50%);
            border-radius: 999px;
            background-color: var(--highlight);
            width: 5px;
            height: 5px;
          }
        }

        &:hover {
          color: var(--highlight);
        }
      }

      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
`;
