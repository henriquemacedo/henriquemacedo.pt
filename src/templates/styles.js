import styled from 'styled-components';
import { rem } from 'polished';
import { device } from '@utils/breakpoints';

export const Heading = styled.div`
  text-align: center;

  a {
    font-size: 0.75rem;
    color: var(--grey);
    letter-spacing: 3px;
    text-transform: uppercase;

    &:hover {
      color: var(--highlight);
    }
  }

  h1 {
    margin-bottom: ${rem('-5px')};
  }

  span {
    font-size: 0.75rem;
    color: var(--grey);
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;

export const Wrapper = styled.div`
  > div {
    > p {
      &:first-child {
        margin: calc(var(--layoutMargin) * 2) 0;
        text-align: center;
        font-size: 1.5rem;
      }
    }

    hr {
      margin-bottom: calc(var(--layoutMargin) * 2);
      border: 0;
      border-bottom: 1px solid var(--grey);
    }

    p + h2 {
      margin-top: 2em;
    }

    ul {
      margin: 0 0 0 2em;
      padding: 0;

      li {
        &:not(:last-child) {
          margin-bottom: 0.5em;
        }
      }

      & + p {
        margin-top: 2em;
      }
    }

    a {
      color: var(--highlight);
      transition-duration: 0.3s;

      &:hover {
        text-decoration: underline;
      }
    }

    blockquote {
      margin: 0;
      border-left: 4px solid var(--white);
      padding-left: 0.75em;
      font-style: italic;

      p {
        margin-bottom: 2em;
        font-size: 1.25rem !important;
        text-align: left;
      }
    }

    img {
      max-width: calc(100% + 10vw);
      height: auto;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    @media ${device.m} {
      > p {
        &:first-child {
          margin: calc(var(--layoutMargin) / 2) 0;
          font-size: 1.75rem;
        }
      }

      hr {
        margin-bottom: calc(var(--layoutMargin) / 2);
      }
    }

    @media ${device.l} {
      > p {
        &:first-child {
          margin: calc(var(--layoutMargin) / 3) 0;
        }
      }

      hr {
        margin-bottom: calc(var(--layoutMargin) / 3);
      }
    }
  }
`;
