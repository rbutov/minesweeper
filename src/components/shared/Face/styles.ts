import styled from 'styled-components';
import { FaceAsserts, Faces, FacesType } from '.';

const FaceContainer = styled.div<{ type: FacesType }>`
  width: 39px;
  height: 39px;
  background-size: 100% 100%;

  ${({ type }) => `background-image: url(${FaceAsserts[type]})`};

  :active {
    ${() => `background-image: url(${FaceAsserts[Faces.PRESSED]})`};
  }
`;

export { FaceContainer };
