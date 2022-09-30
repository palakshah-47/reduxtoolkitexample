import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "stateUpdate",
  initialState: {
    form: {}
  },
  reducers: {
    updateName: (state, action) => {
      state.form = { ...state.form, name: action.payload };
    },
    updateDiscount: (state, action) => {
      state.form = { ...state.form, discount: action.payload };
    },
    updateCountry: (state, action) => {
      state.form = { ...state.form, country: action.payload };
    }
  }
});

export const { updateCountry, updateDiscount, updateName } = stateSlice.actions;
export default stateSlice.reducer;
