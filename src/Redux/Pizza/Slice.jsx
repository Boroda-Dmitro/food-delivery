import { createSlice } from "@reduxjs/toolkit";
import { fetchPizza } from "../operations/oprations";

const initialPizzas = [
  {
    _id: "1",
    name: "Маргарита",
    ingredients: [
      "Тісто",
      "Помідори ",
      "Моцарелла ",
      "Оливкова олія",
      "Базилік ",
      "Томатний соус",
      "Сіль і перець",
    ],
    image: "margarita",
    price: "150",
    discount: false,
  },
  {
    _id: "2",
    name: "Пепероні",
    ingredients: [
      "Тісто",
      "Пепероні",
      "Томатний соус",
      "Сир",
      "Оливкова олія",
      "Сіль і перець",
    ],
    image: "pepperoni",
    price: "170",
    discount: false,
  },
  {
    _id: "3",
    name: "Гавайська",
    ingredients: [
      "Тісто",
      "Курка",
      "Ананаси",
      "Томатний соус",
      "Сир",
      "Оливкова олія",
      "Сіль і перець",
    ],
    image: "hawaiian",
    price: "180",
    discount: false,
  },
];

const pizza = {
  items: initialPizzas,
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
