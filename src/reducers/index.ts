import { combineReducers } from '@reduxjs/toolkit';
import { fieldReducer } from './fieldReducer';

const rootReducer = combineReducers({ field: fieldReducer });

export { rootReducer };
