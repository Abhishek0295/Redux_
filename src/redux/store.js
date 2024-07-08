import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import countReducers from "./Slices/CountSlice";
import todoReducers from "./Slices/todoSlice";
import userReducers from "./Slices/UserSlice";
import registerReducers from "./Slices/RegisterSlice";

const persistConfig = {
  key: "root",
  storage,
};


const rootReducers = combineReducers({
  count: countReducers,
  todo: todoReducers,
  user: userReducers,
  register: registerReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
