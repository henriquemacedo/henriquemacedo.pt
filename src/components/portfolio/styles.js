import styled from 'styled-components';
import { device } from '@utils/breakpoints';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1px;

  @media ${device.s} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
