import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from './redux/invoicesSlice';
import productsReducer from './redux/productsSlice';

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    products: productsReducer,
  },
});

export default store;