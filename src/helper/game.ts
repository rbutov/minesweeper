import { Faces } from 'components/shared/Face';

interface GetFaceProps {
  failedMineKey: string | null;
}
const getFace = ({ failedMineKey }: GetFaceProps) => {
  if (failedMineKey) {
    return Faces.LOSE;
  }

  return Faces.UNPRESSED;
};

export { getFace };
