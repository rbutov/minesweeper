enum Faces {
  UNPRESSED = 'unpressed',
  LOSE = 'lose',
  WIN = 'win',
}

type FacesType = `${Faces}`;

import unpressed from 'assets/face/face_unpressed.svg';
import lose from 'assets/face/face_lose.svg';
import win from 'assets/face/face_win.svg';

const FaceAsserts = {
  [Faces.UNPRESSED]: unpressed,
  [Faces.LOSE]: lose,
  [Faces.WIN]: win,
};

interface FaceProps {
  type: FacesType;
}

export * from './Face';
export { Faces, FaceAsserts };
export type { FacesType, FaceProps };
