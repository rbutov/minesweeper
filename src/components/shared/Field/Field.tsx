import React from 'react';
import { getCellType } from 'helper/field';
import { useAppSelector } from 'hooks/useAppSelector';
import { Cell } from 'components/shared/Cell';
import { FieldContainer, NextLine } from './styles';

const Field = () => {
  const { flaggedKeys, revealedKeys, map, failedMineKey } = useAppSelector((state) => state.field);
  const { size } = useAppSelector((state) => state.field);

  return (
    <FieldContainer>
      {[...Array(size.cols).keys()].map((col) => {
        return (
          <>
            {[...Array(size.rows).keys()].map((row) => {
              return (
                <Cell
                  key={`${row}-${col}`}
                  row={row}
                  col={col}
                  type={getCellType({ row, col, flaggedKeys, revealedKeys, map, failedMineKey })}
                />
              );
            })}
            <NextLine key={col} />
          </>
        );
      })}
    </FieldContainer>
  );
};

export { Field };
