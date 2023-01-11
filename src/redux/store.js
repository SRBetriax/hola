import { configureStore } from "@reduxjs/toolkit";
import currencySlice from './states/currencySlice';

export default configureStore({
  reducer: {
    currency: currencySlice
  }
})
