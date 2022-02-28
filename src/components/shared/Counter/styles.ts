import styled from 'styled-components';

import nums_background from 'assets/nums/nums_background.svg';

const CounterContainer = styled.div`
  width: 61.5px;
  height: 37.5px;
  background-size: 100% 100%;

  background-image: url(${nums_background});
`;

export { CounterContainer };
