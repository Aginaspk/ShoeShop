import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import viewProductReducer from "../features/products/viewProductSlice";
import navbarReducer from "../features/others/navbarSlice";
import loginReducer from "../features/Loging/loginSlice";
import proReducer from "../features/productSlice";
import authReducer from "../features/authSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    viewProduct: viewProductReducer,
    navbar: navbarReducer,
    log: loginReducer,
    pro: proReducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
