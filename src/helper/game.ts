import { Faces } from 'components/shared/Face';
import { numberToArray } from 'helper/number';
import { Size } from 'types';

interface GetFaceProps {
  size: Size;
  minesCount: number;
  revealedKeys: string[];
  failedMineKey: string | null;
}
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
const getMinesCount = ({ minesCount, flaggedKeys }: GetMinesCountProps) => {
  const diff = minesCount - flaggedKeys.length;

  return numberToArray(diff);
};

export { getFace, getMinesCount };
