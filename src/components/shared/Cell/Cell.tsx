import React from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { revealKey, toggleFlag } from 'actions/fieldActions';
import { CellContainer } from './styles';
import { CellProps } from '.';

const Cell = ({ type, row, col, failedMineKey }: CellProps) => {
  const dispatch = useAppDispatch();

  const handleMouseDown = (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();

    if (ev.button === 2) {
      dispatch(toggleFlag({ row, col }));
      return;
    }
  };

  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    dispatch(revealKey({ row, col }));
  };

  return (
    <CellContainer
      type={type}
      failedMineKey={failedMineKey}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    />
  );
};

export { Cell };
