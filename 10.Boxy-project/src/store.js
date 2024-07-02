import { configureStore } from "@reduxjs/toolkit";
import shadow from "./features/shadow";
import boxProperty from "./features/boxProperty";

export const store = configureStore({
  reducer: {
    shadow,
    boxProperty
  },
});

export default store;

