import styled from 'styled-components';
import { CellAsserts, CellType, CellTypes } from '.';

const CellContainer = styled.div<{ type: CellType; failedMineKey: string | null }>`
  width: 24px;
  height: 24px;
  font-size: 10px;
  line-height: 23px;
  float: left;
  background-size: 100%;
  font-weight: 700;
  text-align: center;

  ${({ type }) => `background-image: url(${CellAsserts[type]})`};

  :active {
    ${({ type, failedMineKey }) =>
      type === CellTypes.CLOSED && !failedMineKey
        ? `background-image: url(${CellAsserts[CellTypes.TYPE_0]})`
        : ''};
  }
`;

export { CellContainer };
