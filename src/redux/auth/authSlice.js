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
        state.isLoading = false;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signInThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "user"],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
