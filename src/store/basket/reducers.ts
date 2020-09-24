import { createSlice } from '@reduxjs/toolkit';
import { ProductItemType } from '../../components/ProductItem';

type BasketSliceType = {
  data: ProductItemType[];
};

const INITIAL_STATE: BasketSliceType = {
  data: [],
};

const BasketSlice = createSlice({
  name: 'BasketSlice',
  initialState: INITIAL_STATE,
  reducers: {
    addBasketData(state, action) {
      state.data = [...state.data, action.payload];
    },
    removeBasketData(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

const { addBasketData, removeBasketData } = BasketSlice.actions;

export const BasketActions = {
  addBasketData,
  removeBasketData,
};

export default BasketSlice.reducer;
