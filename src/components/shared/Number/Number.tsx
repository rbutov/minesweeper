import React from 'react';
import { NumberContainer } from './styles';
import { NumberProps } from '.';

const Number = ({ num }: NumberProps) => {
  return (
    <>
      <NumberContainer num={num} />
    </>
  );
};

export { Number };
