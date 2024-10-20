import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; // Your reducer

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
