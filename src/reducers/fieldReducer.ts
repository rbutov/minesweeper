import { createSlice } from '@reduxjs/toolkit';
import { initField, revealKey, toggleFlag } from 'actions/fieldActions';
import { generateMines, generateMap, revealCell, toKey } from 'helper/field';
import { Size } from 'types';

export interface FieldState {
  minesCount: number;
  size: Size;
  map: Record<string, string | number> | null;
  revealedKeys: string[];
  flaggedKeys: string[];
  failedMineKey: string | null;
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
};

const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {},
  extraReducers: {
    [initField.type]: (state) => {
      const seedMines = generateMines({ ...state.size, minesCount: state.minesCount });
      state.map = generateMap({ seedMines, size: state.size });
      state.revealedKeys = [];
      state.flaggedKeys = [];
      state.failedMineKey = null;
    },
    [toggleFlag.type]: (state, action) => {
      if (state.failedMineKey) {
        return;
      }

      const key = toKey({ row: action.payload.row, col: action.payload.col });
      if (!state.flaggedKeys.includes(key)) {
        state.flaggedKeys = [...state.flaggedKeys, key];
      } else {
        state.flaggedKeys = state.flaggedKeys.filter((flaggedKey) => flaggedKey !== key);
      }
    },
    [revealKey.type]: (state, action) => {
      if (state.failedMineKey) {
        return;
      }

      const key = toKey({ row: action.payload.row, col: action.payload.col });
      const revealedKeys = new Set([...state.revealedKeys]);

      const badaboom = revealCell({
        revealedKeys,
        map: new Map(Object.entries(state.map || {})),
        key: toKey({ row: action.payload.row, col: action.payload.col }),
        size: state.size,
      });

      if (badaboom) {
        state.failedMineKey = key;
      } else {
        state.revealedKeys = [...revealedKeys];
      }
    },
  },
});

export const fieldReducer = fieldSlice.reducer;
