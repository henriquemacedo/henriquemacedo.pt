import styled from 'styled-components';
import { rem } from 'polished';
import { device } from '@utils/breakpoints';

export const Wrapper = styled.nav`
  background-color: var(--bg);
  border-bottom: 1px solid var(--grey);
  position: fixed;
  width: 100%;
  height: ${rem('100px')};
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  letter-spacing: ${rem('3px')};
  text-transform: uppercase;
  z-index: 1;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      position: relative;
      list-style: none;

      a {
        color: var(--white);
        text-decoration: none;

        &.active {
          pointer-events: none;

          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: ${rem('-8px')};
            margin-left: 50%;
            transform: translateX(-50%);
            border-radius: 999px;
            background-color: var(--highlight);
            width: ${rem('5px')};
            height: ${rem('5px')};
          }
        }

        &:hover {
          color: var(--highlight);
        }
      }

      &:not(:last-child) {
        margin-right: ${rem('15px')};
      }
    }
  }

  @media ${device.s} {
    ul li {
      &:not(:last-child) {
        margin-right: ${rem('30px')};
      }
    }
  }
`;
