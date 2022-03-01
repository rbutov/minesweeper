import React from 'react';
import { CONFIGS } from 'config/game';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { initField } from 'actions/fieldActions';
import { GameModeContainer } from './styles';

const GameMode = () => {
  const dispatch = useAppDispatch();

  const handleGameModeChange = (mode: keyof typeof CONFIGS) => {
    dispatch(initField(CONFIGS[mode]));
  };

  return (
    <GameModeContainer>
      {Object.keys(CONFIGS).map((config) => {
        return (
          <button
            data-testid={`mode-${config}`}
            key={config}
            onClick={() => handleGameModeChange(config as keyof typeof CONFIGS)}
          >
            {config}
          </button>
        );
      })}
    </GameModeContainer>
  );
};

export { GameMode };
