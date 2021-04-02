import styled from 'styled-components';
import { device } from '@utils/breakpoints';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: calc(2 * var(--layoutMargin)) var(--layoutMargin);

  @media ${device.m} {
    padding: calc(var(--layoutMargin) / 2) var(--layoutMargin) 0
      var(--layoutMargin);
  }

  @media ${device.l} {
    padding: calc(var(--layoutMargin) / 2) 0 0 0;
  }
`;
