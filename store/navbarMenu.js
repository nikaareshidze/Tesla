import { createSlice } from "@reduxjs/toolkit";

const navbarMenuInitialState = {
  shown: false,
};

const navbarMenuSlice = createSlice({
  name: "navbarMenu",
  initialState: navbarMenuInitialState,
  reducers: {
    setShown(state) {
      state.shown = !state.shown;
    },
  },
});

export const navbarMenuActions = navbarMenuSlice.actions;

export default navbarMenuSlice;
