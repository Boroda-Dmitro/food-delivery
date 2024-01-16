import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addDish(state, action) {
      state.push(action.payload);
    },
    deleteDish(state, action) {
      const index = state.findIndex((dish) => dish._id === action.payload._id);
      state.splice(index, 1);
    },
    addOne(state, action) {
      const index = state.findIndex((dish) => dish._id === action.payload._id);
      if (index !== -1) {
        state[index].number = (state[index].number || 0) + 1;
      }
    },
    removeOne(state, action) {
      const index = state.findIndex((dish) => dish._id === action.payload._id);
      if (index !== -1) {
        state[index].number = (state[index].number || 0) - 1;
        if (state[index].number <= 0) {
          state.splice(index, 1);
        }
      }
      },
      resetBasket(state, action) {
       return [];
    }
  },
});
