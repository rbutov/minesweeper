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

/**
 * _get row and col from Key
 * @param key: _field coordinate
 */
const fromKey = (key: string) => {
  return key.split('-').map(Number);
};

interface GenerateMinesProps {
  rows: number;
  cols: number;
  minesCount: number;
}

/**
 * _generate mines
 * @param rows: _field rows
 * @param cols: _field cols
 * @param minesCount: _mines count
 */
const generateMines = ({ rows, cols, minesCount }: GenerateMinesProps) => {
  const mines = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      mines.push(toKey({ row, col }));
    }
  }
  mines.sort(() => (Math.random() > 0.5 ? 1 : -1));

  //return mines.slice(0, minesCount);
  console.log(minesCount);
  return ['1-1', '3-3', '7-8', '5-6', '2-8', '8-2', '1-2', '1-3', '1-4', '1-5'];
};

interface GenerateMapProps {
  seedMines: string[];
  size: Size;
}

/**
 * _generate field map
 * @param seedMines: _mines positions
 * @param size: _field size
 */
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

/**
 * _check field borders
 * @param row: _row number
 * @param col: _column number
 * @param rows: _rows count
 * @param cols: _columns count
 */
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

/**
 * _get cell neighbors
 * @param key: _current key
 * @param size: _field size
 */
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

/**
 * _get filed types
 * @param row
 * @param col
 * @param flaggedKeys
 * @param revealedKeys
 * @param map
 * @param failedMineKey
 */
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

/**
 * _reveal the cell
 * @param revealedKeys: _already revealed cells keys
 * @param map: _field map
 * @param key: _current key
 * @param size: _field size
 */
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

/**
 * _reveal all neighbors cells of field
 * @param revealedKeys: _revealed keys on field
 * @param map: _field map
 * @param key: _current key
 * @param visited: _visited set
 * @param size: _field size
 */
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

interface GetAllMinesProps {
  map: Record<string, string | number> | null;
  minesCount: number;
}

/**
 * _get all mines keys from map
 * @param map: _field map
 * @param minesCount: _mines count
 */
const getAllMines = ({ map, minesCount }: GetAllMinesProps) => {
  const mines = [];

  for (let key in map) {
    if (map[key] === 'mine') {
      mines.push(key);
    }
    if (mines.length === minesCount) {
      break;
    }
  }

  return mines;
};

export { toKey, generateMines, generateMap, getCellType, revealCell, getAllMines };
