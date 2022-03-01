import { Faces } from 'components/shared/Face';
import { numberToArray } from 'helper/number';
import { Size } from 'types';

interface GetFaceProps {
  size: Size;
  minesCount: number;
  revealedKeys: string[];
  failedMineKey: string | null;
}

/**
 * _get face ENUM
 * @param failedMineKey: _explosed mine key
 * @param size: _field size
 * @param revealedKeys: _already revealed keys
 * @param minesCount: _mines count
 */
const getFace = ({ failedMineKey, size, revealedKeys, minesCount }: GetFaceProps) => {
  if (failedMineKey) {
    return Faces.LOSE;
  }
  if (size.cols * size.cols === revealedKeys.length - minesCount + 2) {
    return Faces.WIN;
  }

  return Faces.UNPRESSED;
};

interface GetMinesCountProps {
  minesCount: number;
  flaggedKeys: string[];
}

/**
 * _get rest of mines count (unflagged)
 * @param minesCount: _mines count
 * @param flaggedKeys: _flagged cells count
 */
const getMinesCount = ({ minesCount, flaggedKeys }: GetMinesCountProps) => {
  const diff = minesCount - flaggedKeys.length;

  return numberToArray(diff);
};

export { getFace, getMinesCount };
