import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./service/user-service";
const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(userApi.middleware),
});

export default store;
