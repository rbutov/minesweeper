import styled from 'styled-components';
import { FaceAsserts, FacesType } from '.';

const FaceContainer = styled.div<{ type: FacesType }>`
  width: 39px;
  height: 39px;
  background-size: 100% 100%;

  ${({ type }) => `background-image: url(${FaceAsserts[type]})`};
`;

export { FaceContainer };
