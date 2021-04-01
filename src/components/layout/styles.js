import styled, { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import { device } from '@utils/breakpoints';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #1d252c;
    --white: #ededed;
    --grey: #41505e;
    --highlight: #e0be24;
    --textSize: 17px;
    --light: 300;
    --bold: 700;
    --linkTransition: 0.2s;
    --layoutMargin: ${rem('30px')};
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: var(--textSize);
  }

  body {
    background-color: var(--bg);
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: var(--light);
    color: var(--white);
  }

  h1 {
    margin: 0;
    font-family: 'Libre Baskerville', serif;
    font-size: 2.5rem;
    line-height: 150%;
    color: var(--white);
  }

  p {
    margin: 0;
    line-height: 160%;
  }

  p:not(:last-child) {
    margin-bottom: 2em;
  }

  a {
    color: var(--white);
    text-decoration: none;
    -webkit-transition: var(--linkTransition);
    -moz-transition: var(--linkTransition);
    -o-transition: var(--linkTransition);
    transition: var(--linkTransition);
    cursor: pointer;
  }

  a:hover {
    color: var(--highlight);
  }

  @media ${device.m} {
    :root {
      --layoutMargin: ${rem('100px')};
    }

    p, ul {
      line-height: 180%;
    }
  }

  @media ${device.xl} {
    :root {
      --layoutMargin: ${rem('200px')};
    }
  }
`;

export const Wrapper = styled.div`
  padding: ${rem('100px')} 0 0 0;
  overflow-x: hidden;
`;
