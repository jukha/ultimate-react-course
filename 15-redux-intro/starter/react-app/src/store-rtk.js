import accountReducer from "./features/account/accountSlice-rtk";
import customerReducer from "./features/customer/customerSlice-rtk";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
