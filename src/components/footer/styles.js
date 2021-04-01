import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  padding: var(--layoutMargin);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      width: ${rem('30px')};
      height: ${rem('30px')};

      &:not(:last-child) {
        margin-right: 20px;
      }

      svg {
        width: ${rem('30px')};
        height: ${rem('30px')};
        fill: var(--grey);
        -webkit-transition: var(--linkTransition);
        -moz-transition: var(--linkTransition);
        -o-transition: var(--linkTransition);
        transition: var(--linkTransition);
      }

      &:hover {
        svg {
          fill: var(--white);
        }
      }
    }
  }
`;
