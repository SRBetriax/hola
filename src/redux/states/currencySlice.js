import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { currencyUrl } from "../../config";
import { saveCurrency } from "../../utils";

export const EmptyState = {
  currency: ''
};

export const fetchCurrency = createAsyncThunk("currency/fetchCurrency", async () => {
  try {
    const { data } = await axios.get(currencyUrl);
    // console.log(data, 'estado')

    const price = Math.round(data.quotes.USDPEN * 100) / 100;
    console.log('listo')
    saveCurrency(price);
    return price
  } catch (err) {
    console.error(err);
  }
});

export const currencySlice = createSlice({
  name: "currency",
  initialState: EmptyState,
  reducers: {
    // searchCoin: (state, action) => {
    //   state.coins =
    //     action.payload === ""
    //       ? state.coinsCopy
    //       : state.coinsCopy.filter((e) =>
    //           e.name.toLowerCase().includes(action.payload)
    //         );
    // },
    // resetCoins: (state) => {
    //   state.coinsCopy = [];
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrency.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.status = "succeeded";

        const data = action.payload;
        state.currency = data.data
        // state.currencyCopy = data.data;

        if (data.errors === "There is not data") {
          state.currency = [];
          // state.currencyCopy = [];
        }
      });
  },
});

// export const { searchCoin, resetCoins } = coinsSlice.actions;

export default currencySlice.reducer;
