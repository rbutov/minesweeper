import styled from 'styled-components';
import { NumberAsserts } from 'components/shared/Number/index';

const NumberContainer = styled.div<{ num: number }>`
  width: 61.5px;
  height: 37.5px;
  background-size: 100% 100%;

  ${({ num }) => `background-image: url(${NumberAsserts[num]})`};
`;

export { NumberContainer };
