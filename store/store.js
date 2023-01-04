import { configureStore } from "@reduxjs/toolkit";
import navbarMenuSlice from "./navbarMenu";

const store = configureStore({
  reducer: {
    navbarMenuSlice: navbarMenuSlice.reducer,
  },
});

export default store;
