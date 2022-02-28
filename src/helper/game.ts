import { Faces } from 'components/shared/Face';
import { numberToArray } from 'helper/number';

interface GetFaceProps {
  failedMineKey: string | null;
}
const getFace = ({ failedMineKey }: GetFaceProps) => {
  if (failedMineKey) {
    return Faces.LOSE;
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
