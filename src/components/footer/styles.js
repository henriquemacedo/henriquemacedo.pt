import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10vw;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      width: 30px;
      height: 30px;

      &:not(:last-child) {
        margin-right: 20px;
      }

      svg {
        width: 30px;
        height: 30px;
        fill: var(--grey, #41505e);
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        -o-transition: 0.2s;
        transition: 0.2s;
      }

      &:hover {
        svg {
          fill: var(--white, #ededed);
        }
      }
    }
  }
`;
