import { Size } from 'types';
import { CellTypes } from 'components/shared/Cell';

interface ToKeyProps {
  row: number;
  col: number;
}

/**
 * _convert coordinates to key
 * @param row: _row number
 * @param col: _col number
 */
const toKey = ({ row, col }: ToKeyProps) => {
  return row + '-' + col;
};

const fromKey = (key: string) => {
  return key.split('-').map(Number);
};

interface GenerateMinesProps {
  rows: number;
  cols: number;
  minesCount: number;
}
const generateMines = ({ rows, cols, minesCount }: GenerateMinesProps) => {
  const mines = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      mines.push(toKey({ row, col }));
    }
  }
  mines.sort(() => (Math.random() > 0.5 ? 1 : -1));

  return mines.slice(0, minesCount);
};

interface GenerateMapProps {
  seedMines: string[];
  size: Size;
}
const generateMap = ({ seedMines, size }: GenerateMapProps) => {
  const map = new Map();

  const incrementDanger = (neighborKey: string) => {
    if (!map.has(neighborKey)) {
      map.set(neighborKey, 1);
    } else {
      const oldVal = map.get(neighborKey);

      if (oldVal !== 'mine') {
        map.set(neighborKey, oldVal + 1);
      }
    }
  };

  for (let key of seedMines) {
    map.set(key, 'mine');

    for (let neighborKey of getNeighbors({ key, size })) {
      incrementDanger(neighborKey);
    }
  }

  return Object.fromEntries(map);
};

interface isInBoundsProps {
  cell: number[];
  size: Size;
}
const isInBounds = ({ cell: [row, col], size: { rows, cols } }: isInBoundsProps) => {
  if (row < 0 || col < 0) {
    return false;
  }

  return !(row >= rows || col >= cols);
};

interface getNeighborsProps {
  key: string;
  size: Size;
}
const getNeighbors = ({ key, size }: getNeighborsProps) => {
  const [nRow, nCol] = fromKey(key);
  const neighborRowCols = [
    [nRow - 1, nCol - 1],
    [nRow - 1, nCol],
    [nRow - 1, nCol + 1],
    [nRow, nCol - 1],
    [nRow, nCol + 1],
    [nRow + 1, nCol - 1],
    [nRow + 1, nCol],
    [nRow + 1, nCol + 1],
  ];

  return neighborRowCols
    .filter((cell) => isInBounds({ cell, size }))
    .map(([row, col]) => toKey({ row, col }));
};

interface GetCellTypeProps {
  row: number;
  col: number;
  flaggedKeys: string[];
  revealedKeys: string[];
  map: Record<string, string | number> | null;
  failedMineKey: string | null;
}
const getCellType = ({
  row,
  col,
  flaggedKeys,
  revealedKeys,
  map,
  failedMineKey,
}: GetCellTypeProps) => {
  const key = toKey({ row, col });

  if (failedMineKey) {
    if (map && Object.prototype.hasOwnProperty.call(map, key) && map[key] === 'mine') {
      if (failedMineKey === key) {
        return CellTypes.MINE_RED;
      }
      if (flaggedKeys.includes(key)) {
        return CellTypes.FLAG;
      }

      return CellTypes.MINE;
    }

    if (
      flaggedKeys.includes(key) &&
      map &&
      Object.prototype.hasOwnProperty.call(map, key) &&
      map[key] !== 'mine'
    ) {
      return CellTypes.MINE_WRONG;
    }
  }

  if (revealedKeys.includes(key)) {
    if (map && Object.prototype.hasOwnProperty.call(map, key)) {
      switch (map[key]) {
        case 1:
          return CellTypes.TYPE_1;
        case 2:
          return CellTypes.TYPE_2;
        case 3:
          return CellTypes.TYPE_3;
        case 4:
          return CellTypes.TYPE_4;
        default:
          return CellTypes.MINE;
      }
    }

    return CellTypes.TYPE_0;
  }

  if (flaggedKeys.includes(key)) {
    return CellTypes.FLAG;
  }

  return CellTypes.CLOSED;
};

interface RevealCellProps {
  revealedKeys: Set<string>;
  map: Map<string, string | number>;
  key: string;
  size: Size;
}
const revealCell = ({ revealedKeys, map, key, size }: RevealCellProps) => {
  if (map.get(key) === 'mine') {
    return true;
  } else {
    propagateReveal({ revealedKeys, map, key, visited: new Set(), size });
  }

  return false;
};

interface PropagateRevealProps {
  revealedKeys: Set<string>;
  map: Map<string, string | number>;
  key: string;
  visited: Set<string>;
  size: Size;
}
const propagateReveal = ({ revealedKeys, map, key, visited, size }: PropagateRevealProps) => {
  revealedKeys.add(key);
  visited.add(key);

  const isEmpty = !map.has(key);
  if (isEmpty) {
    for (let neighborKey of getNeighbors({ key, size })) {
      if (!visited.has(neighborKey)) {
        propagateReveal({ revealedKeys, map, key: neighborKey, visited, size });
      }
    }
  }
};

export { toKey, generateMines, generateMap, getCellType, revealCell };
