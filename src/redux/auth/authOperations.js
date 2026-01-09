import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/axios";

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (userData, thunkAPI) => {
    try {
      const { data } = await API.post("/auth/signup", userData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post("/auth/signin", credentials);
      localStorage.setItem("token", data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
