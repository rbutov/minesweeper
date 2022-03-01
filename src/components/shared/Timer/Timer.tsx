import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { numberToArray } from 'helpers/number';
import { Number } from 'components/shared/Number';
import { TimerContainer } from './styles';

const Timer = () => {
  const [count, setCount] = useState([0, 0, 0]);
  const { timer } = useAppSelector((state) => state.field);

  useEffect(() => {
    setCount(numberToArray(timer));
  }, [timer]);

  return (
    <TimerContainer data-testid={'timer'}>
      <Number num={count[0]} />
      <Number num={count[1]} />
      <Number num={count[2]} />
    </TimerContainer>
  );
};

export { Timer };
