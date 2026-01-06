import { combineReducers } from "redux";
import { authReducer } from "./auth/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
});
