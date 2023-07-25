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
  stocks2: [],
};

const stocksSlice2 = createSlice({
  name: 'stocks2',
  initialState,
  reducers: {
    addStock: (state, action) => {
      state.stocks2 = [...state.stocks2,
        {
          response_data: action.payload.response_data,
        }];
    },
    removeStock: (state, action) => {
      state.stocks2 = state.stocks2.filter(
        ({ stockName }) => stockName !== action.payload,
      );
    },
  },
});

export const { addStock, removeStock } = stocksSlice2.actions;
export default stocksSlice2.reducer;
