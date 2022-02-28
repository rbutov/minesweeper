enum CellTypes {
  CLOSED = 'closed',
  FLAG = 'flag',
  MINE = 'mine',
  MINE_RED = 'mine_red',
  MINE_WRONG = 'mine_wrong',
  TYPE_0 = 'type_0',
  TYPE_1 = 'type_1',
  TYPE_2 = 'type_2',
  TYPE_3 = 'type_3',
  TYPE_4 = 'type_4',
}

type CellType = `${CellTypes}`;

interface CellProps {
  type: CellType;
  row: number;
  col: number;
}

import closed from 'assets/cell/closed.svg';
import flag from 'assets/cell/flag.svg';
import mine from 'assets/cell/mine.svg';
import mine_red from 'assets/cell/mine_red.svg';
import mine_wrong from 'assets/cell/mine_wrong.svg';
import type0 from 'assets/cell/type0.svg';
import type1 from 'assets/cell/type1.svg';
import type2 from 'assets/cell/type2.svg';
import type3 from 'assets/cell/type3.svg';
import type4 from 'assets/cell/type4.svg';

const CellAsserts = {
  [CellTypes.CLOSED]: closed,
  [CellTypes.FLAG]: flag,
  [CellTypes.MINE]: mine,
  [CellTypes.MINE_RED]: mine_red,
  [CellTypes.MINE_WRONG]: mine_wrong,
  [CellTypes.TYPE_0]: type0,
  [CellTypes.TYPE_1]: type1,
  [CellTypes.TYPE_2]: type2,
  [CellTypes.TYPE_3]: type3,
  [CellTypes.TYPE_4]: type4,
};

export * from './Cell';
export { CellTypes, CellAsserts };
export type { CellProps, CellType };
