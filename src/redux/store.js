import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./service/user-service";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(userApi.middleware),
});
setupListeners(store.dispatch);
export default store;
