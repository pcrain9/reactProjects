import { configureStore } from "@reduxjs/toolkit";
import bounceSlice from "./handle-bounce-slice";
import menuSlice from "./handle-cart-slice";

const store = configureStore({
    reducer: {menuSlice: menuSlice.reducer, bounceSlice: bounceSlice.reducer} 
});

export default store;