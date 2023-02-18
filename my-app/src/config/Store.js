import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "../reducers/BasketSlice"
export const store=configureStore({
    reducer:{
        basket:BasketReducer,
    }
})