/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

// export interface Stock {
//     stockName: string;
//     purchaseDate: string;
//     qttPurchased: number;
// }
// interface StocksList{
//     stocks:Stock[]
// }

const initialState = {
  stocks: [],
};

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    addStock: (state, action) => {
      state.stocks = [...state.stocks,
        {
          response_data: action.payload.response_data,
        }];
    },
    removeStock: (state, action) => {
      state.stocks = state.stocks.filter(
        ({ stockName }) => stockName !== action.payload,
      );
    },
  },
});

export const { addStock, removeStock } = stocksSlice.actions;
export default stocksSlice.reducer;
