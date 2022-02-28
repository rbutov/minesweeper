import styled from 'styled-components';
import { CellAsserts, CellType } from '.';

const CellContainer = styled.div<{ type: CellType }>`
  width: 24px;
  height: 24px;
  font-size: 10px;
  line-height: 23px;
  float: left;
  background-size: 100%;
  font-weight: 700;
  text-align: center;

  ${({ type }) => `background-image: url(${CellAsserts[type]})`};
`;

export { CellContainer };
