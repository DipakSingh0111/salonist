import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import serviceSlice from "../store/slice/serviceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    serviceSale: serviceSlice,
  },
});

export default store;
