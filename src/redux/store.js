import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
    reducer:{
        login: loginSlice,
        search: searchSlice
    }
})