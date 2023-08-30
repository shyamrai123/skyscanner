import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer:{
        User:userSlice,
    }
})



export default store;