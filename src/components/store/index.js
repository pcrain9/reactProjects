import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./handle-cart-slice";

const store = configureStore({
    reducer: menuSlice.reducer, 
});

export default store;