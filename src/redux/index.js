import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from './invoicesSlice';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    products: productsReducer,
  },
});

export default store;