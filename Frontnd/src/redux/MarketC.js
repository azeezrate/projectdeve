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
  market: [],
};

const Market = createSlice({
  name: 'market',
  initialState,
  reducers: {
    addMarket: (state, action) => {
      state.market = [...state.market,
        {
          market_data: action.payload,
        }];
    },
    removeMarket: (state, action) => {
      state.market = state.market.filter(
        ({ marketName }) => marketName !== action.payload,
      );
    },
  },
});

export const { addMarket, removeMarket } = Market.actions;
export default Market.reducer;
