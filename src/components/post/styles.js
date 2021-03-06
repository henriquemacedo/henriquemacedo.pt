import styled from 'styled-components'

export const Wrapper = styled.div`
  h1 {
    margin: 0.3em 0;
  }

  a {
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p {
    font-size: var(--textSize);
  }

  &:not(:last-child) {
    margin-bottom: 60px;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 60px;
  }
`