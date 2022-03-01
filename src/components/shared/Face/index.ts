enum Faces {
  UNPRESSED = 'unpressed',
  PRESSED = 'pressed',
  LOSE = 'lose',
  WIN = 'win',
}

type FacesType = `${Faces}`;

import unpressed from 'assets/face/face_unpressed.svg';
import pressed from 'assets/face/face_pressed.svg';
import lose from 'assets/face/face_lose.svg';
import win from 'assets/face/face_win.svg';

const FaceAsserts = {
  [Faces.UNPRESSED]: unpressed,
  [Faces.PRESSED]: pressed,
  [Faces.LOSE]: lose,
  [Faces.WIN]: win,
};

interface FaceProps {
  type: FacesType;
}

export * from './Face';
export { Faces, FaceAsserts };
export type { FacesType, FaceProps };
