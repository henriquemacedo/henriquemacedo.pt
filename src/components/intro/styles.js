import styled from 'styled-components'
import { device } from '@utils/breakpoints'

export const Wrapper = styled.div`
  padding: 0 5vw 0 5vw;

  @media ${device.s} {
    padding: 0 10vw 10vw 10vw;
  }

  h1 {
    margin: 60px 0;
    font-size: 3rem;
    color: var(--highlight);
  }

  p:not(:last-child) {
    margin-bottom: 1em;
  }

  a {
    border-bottom: 1px solid var(--grey);
    color: var(--white, #ededed);

    &:hover {
      border-color: var(--highlight);
    }
  }
`