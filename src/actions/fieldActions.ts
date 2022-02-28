import { createAction } from '@reduxjs/toolkit';
import { Size } from 'types';

const increaseTimer = createAction('field/increaseTimer');

export interface InitProps {
  minesCount?: number;
  size?: Size;
}
const initField = createAction<InitProps>('field/init');

export interface ToggleFlagProps {
  row: number;
  col: number;
}
const toggleFlag = createAction<ToggleFlagProps>('field/toggleFlag');
const revealKey = createAction<ToggleFlagProps>('field/revealKey');

export { increaseTimer, initField, toggleFlag, revealKey };
