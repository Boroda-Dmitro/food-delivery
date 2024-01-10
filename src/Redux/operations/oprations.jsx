import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pizza-api-6p8q.onrender.com";

export const fetchPizza = createAsyncThunk(
  "pizza/getPizza",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/pizza`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPizza = async () => {
  try {
    const response = await axios.get(`/api/pizza`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
