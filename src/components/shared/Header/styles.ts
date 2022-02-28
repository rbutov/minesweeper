import styled from 'styled-components';
import { TimerContainer } from 'components/shared/Timer/styles';
import { CounterContainer } from 'components/shared/Counter/styles';
import { FaceContainer } from 'components/shared/Face/styles';

const HeaderContainer = styled.div`
  flex-grow: 1;
  height: 48px;
  background: silver;
  position: relative;

  ${TimerContainer} {
    position: absolute;
    left: 5px;
    top: 5px;
  }
  ${CounterContainer} {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  ${FaceContainer} {
    position: relative;
    top: 5px;
    margin: auto;
  }
`;

export { HeaderContainer };
