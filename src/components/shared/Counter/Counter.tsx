import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { getMinesCount } from 'helper/game';
import { Number } from 'components/shared/Number';
import { CounterContainer } from './styles';

const Counter = () => {
  const [count, setCount] = useState([0, 0, 0]);
  const { minesCount, flaggedKeys } = useAppSelector((state) => state.field);

  useEffect(() => {
    setCount(getMinesCount({ minesCount, flaggedKeys }));
  }, [minesCount, flaggedKeys]);

  return (
    <CounterContainer data-testid={'counter'}>
      <Number num={count[0]} />
      <Number num={count[1]} />
      <Number num={count[2]} />
    </CounterContainer>
  );
};

export { Counter };
