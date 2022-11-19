import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "./marketSlice";




export const store =configureStore({
    reducer:{
        market:marketSlice,
    },
});