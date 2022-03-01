import styled from 'styled-components';

import nums_background from 'assets/nums/nums_background.svg';

const CounterContainer = styled.div`
  width: 61.5px;
  height: 37.5px;
  background-size: 100% 100%;
  padding: 3px;
  background-image: url(${nums_background});

  > div {
    float: left;
    width: 18.5px;
    height: 37.5px;
    margin-right: 3px;

    :last-child {
      margin-right: 0;
    }
  }
`;

export { CounterContainer };
