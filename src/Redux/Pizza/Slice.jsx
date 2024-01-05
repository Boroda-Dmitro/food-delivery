import { createSlice } from "@reduxjs/toolkit";
import { fetchPizza } from "../operations/oprations";

const pizza = {
  items: [],
  isLoading: false,
  error: null,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: pizza,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
          state.isLoading = false;
          state.items = action.payload;
           
      })
      .addCase(fetchPizza.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
