import React from 'react';
import { getCellType } from 'helpers/field';
import { useAppSelector } from 'hooks/useAppSelector';
import { Cell } from 'components/shared/Cell';
import { FieldContainer, FieldRow, NextLine } from './styles';

const Field = () => {
  const { flaggedKeys, revealedKeys, map, failedMineKey, size } = useAppSelector(
    (state) => state.field
  );

  return (
    <FieldContainer data-testid={'field'}>
      {[...Array(size.rows).keys()].map((row) => {
        return (
          <FieldRow key={`${row}`}>
            {[...Array(size.cols).keys()].map((col) => {
              return (
                <div key={`${row}-${col}`} data-testid={`cell-${row}-${col}`}>
                  <Cell
                    row={row}
                    col={col}
                    failedMineKey={failedMineKey}
                    type={getCellType({ row, col, flaggedKeys, revealedKeys, map, failedMineKey })}
                  />
                </div>
              );
            })}
            <NextLine key={row} />
          </FieldRow>
        );
      })}
    </FieldContainer>
  );
};

export { Field };
