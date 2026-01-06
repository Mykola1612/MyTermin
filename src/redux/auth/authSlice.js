import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./authInitialState.js";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
