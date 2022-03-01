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
    right: 2px;
    top: 2px;
  }
  ${CounterContainer} {
    position: absolute;
    left: 2px;
    top: 2px;
  }
  ${FaceContainer} {
    position: relative;
    top: 4px;
    margin: auto;
  }
`;

export { HeaderContainer };
