import { configureStore } from "@reduxjs/toolkit";
import telephone from "./features/telephone";
import telCart from "./features/telCart";
import filterTel from "./features/filterTel";

export const store = configureStore({
    reducer: {
        telephone,
        telCart,
        filterTel,

    },
});


