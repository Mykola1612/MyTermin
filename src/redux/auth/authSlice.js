import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./authInitialState.js";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { logoutThunk, signInThunk, signUpThunk } from "./authOperations.js";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        // state.accessToken = action.payload.accessToken;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
