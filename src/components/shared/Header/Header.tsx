import React from 'react';
import { getFace } from 'helper/game';
import { useAppSelector } from 'hooks/useAppSelector';
import { Face } from 'components/shared/Face';
import { Counter } from 'components/shared/Counter';
import { Timer } from 'components/shared/Timer';
import { HeaderContainer } from './styles';

const Header = () => {
  const { failedMineKey } = useAppSelector((state) => state.field);

  return (
    <HeaderContainer>
      <Counter />
      <Face type={getFace({ failedMineKey })} />
      <Timer />
    </HeaderContainer>
  );
};

export { Header };
