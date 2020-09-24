import { combineReducers } from '@reduxjs/toolkit';
import basketReducer from '../basket/reducers';

const reducer = combineReducers({
  basketReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
