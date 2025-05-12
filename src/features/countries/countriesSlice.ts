import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../app/api/axiosInstance";

import type { PayloadAction } from "@reduxjs/toolkit";
import type Country from "./models/Country";
interface CountryState {
  countries: Country[] | null;
}

const initialState: CountryState = {
  countries: null,
};

const getCountries = createAsyncThunk<Country[], void>(
  "getCountries",
  async () => {
    const data = await api.get();
    return data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.countries = null;
      })
      .addCase(
        getCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.countries = action.payload;
        }
      )
      .addCase(getCountries.rejected, (state) => {
        state.countries = null;
      });
  },
});

const { setCountries } = countriesSlice.actions;

export { getCountries, countriesSlice, setCountries };
