import styled from 'styled-components'
import { device } from '@utils/breakpoints'

export const Wrapper = styled.div`
  padding: 30px 5vw 60px 5vw;

  @media ${device.s} {
    padding: 0 10vw 10vw 10vw;
  }

  h2 {
    margin: 0 0 30px 0;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--grey);
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 30px;
    text-align: center;
  }

  @media ${device.s} {
    > div {
      grid-gap: 5vw;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-width: 30vw;
    max-height: 50px;
  }

  @media ${device.s} {
    img {
      max-width: none;
    }
  }
`