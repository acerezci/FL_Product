import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store/app/reducer';

const basketSelector = createSelector(
  (state: RootState) => state.basketReducer,
  (basketReducer) => basketReducer,
);

export default basketSelector;
