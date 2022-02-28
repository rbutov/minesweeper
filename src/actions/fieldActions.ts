import { createAction } from '@reduxjs/toolkit';

export interface ToggleFlagProps {
  row: number;
  col: number;
}

const initField = createAction('field/init');

const toggleFlag = createAction<ToggleFlagProps>('field/toggleFlag');
const revealKey = createAction<ToggleFlagProps>('field/revealKey');

export { initField, toggleFlag, revealKey };
