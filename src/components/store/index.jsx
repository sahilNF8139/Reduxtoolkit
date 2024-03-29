import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/Slice.jsx"

const Store=configureStore({
    reducer:{
        users:userSlice.reducer
    }
})
export default Store;