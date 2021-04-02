import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  h2 {
    margin: 0.3em 0;
    font-size: 2.5rem;
  }

  span {
    font-size: 0.75rem;
    color: var(--grey);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  a {
    font-size: 0.75rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p {
    font-size: var(--textSize);
    color: var(--grey);
  }

  &:not(:last-child) {
    margin-bottom: ${rem('60px')};
    border-bottom: 1px solid var(--grey);
    padding-bottom: ${rem('60px')};
  }
`;
