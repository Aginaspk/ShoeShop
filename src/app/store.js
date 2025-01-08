import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/ProductSlice";
import viewProductReducer from '../features/products/viewProductSlice'
import navbarReducer from '../features/others/navbarSlice'
import loginReducer from '../features/Loging/loginSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        viewProduct:viewProductReducer,
        navbar:navbarReducer,
        log:loginReducer

    }
})