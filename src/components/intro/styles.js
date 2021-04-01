import styled from 'styled-components';
import { device } from '@utils/breakpoints';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1680px;
  padding: calc(2 * var(--layoutMargin)) var(--layoutMargin);

  h1 {
    margin-bottom: 0.3em;
    font-size: 3.5rem;
    line-height: 100%;
    color: var(--highlight);
  }

  p {
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  a {
    border-bottom: 1px solid var(--grey);
    color: var(--white);

    &:hover {
      border-color: var(--highlight);
    }
  }

  @media ${device.m} {
    padding: var(--layoutMargin);
  }

  @media ${device.l} {
    h1 {
      font-size: 4.25rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;
