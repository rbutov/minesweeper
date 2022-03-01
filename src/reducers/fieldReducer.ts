import { createSlice } from '@reduxjs/toolkit';
import { Size } from 'types';
import { increaseTimer, initField, revealKey, toggleFlag } from 'actions/fieldActions';
import { generateMines, generateMap, revealCell, toKey, getAllMines } from 'helper/field';

export interface FieldState {
  minesCount: number;
  size: Size;
  map: Record<string, string | number> | null;
  revealedKeys: string[];
  flaggedKeys: string[];
  failedMineKey: string | null;
  timer: number;
  isActive: boolean;
}

const initialState: FieldState = {
  minesCount: 10,
  size: {
    cols: 9,
    rows: 9,
  },
  map: null,
  revealedKeys: [],
  flaggedKeys: [],
  failedMineKey: null,
  timer: 0,
  isActive: false,
};

const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {},
  extraReducers: {
    [increaseTimer.type]: (state) => {
      state.timer++;
    },
    [initField.type]: (state, action) => {
      if (action.payload.minesCount) {
        state.size = action.payload.size;
        state.minesCount = action.payload.minesCount;
      }

      const seedMines = generateMines({ ...state.size, minesCount: state.minesCount });
      state.map = generateMap({ seedMines, size: state.size });
      state.revealedKeys = [];
      state.flaggedKeys = [];
      state.failedMineKey = null;
      state.timer = 0;
      state.isActive = false;
    },
    [toggleFlag.type]: (state, action) => {
      if (state.failedMineKey) {
        state.isActive = false;
        return;
      }
      state.isActive = true;

      const key = toKey({ row: action.payload.row, col: action.payload.col });
      if (state.revealedKeys.includes(key)) {
        return;
      }
      if (!state.flaggedKeys.includes(key)) {
        state.flaggedKeys = [...state.flaggedKeys, key];
      } else {
        state.flaggedKeys = state.flaggedKeys.filter((flaggedKey) => flaggedKey !== key);
      }
    },
    [revealKey.type]: (state, action) => {
      if (state.failedMineKey) {
        state.isActive = false;
        return;
      }
      state.isActive = true;

      const key = toKey(action.payload);
      const revealedKeys = new Set([...state.revealedKeys]);

      const badaboom = revealCell({
        revealedKeys,
        key,
        map: new Map(Object.entries(state.map || {})),
        size: state.size,
      });

      if (badaboom) {
        state.isActive = false;
        state.failedMineKey = key;
      } else {
        state.revealedKeys = [...revealedKeys];
        if (
          state.size.cols * state.size.cols ===
          state.revealedKeys.length - state.minesCount + 2
        ) {
          state.isActive = false;
          state.flaggedKeys = getAllMines(state);
        }
      }
    },
  },
});

export const fieldReducer = fieldSlice.reducer;
