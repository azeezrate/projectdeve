import { configureStore } from '@reduxjs/toolkit';
import stockSlice from './StockSlice';
import stockSlice2 from './StockSlice2';
import Market from './MarketC';

const store = configureStore({ reducer: { first: stockSlice, second: stockSlice2, third: Market } });

// type RootState = ReturnType<typeof store.getState>
export const selectStocks = (state) => state.stocks;
export const selectStocks2 = (state) => state.stocks2;

export default store;
