import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modal from "./modal";
import coachRegSlice from "./registration/coach";

const rootReducer = combineReducers({
  isModalOpen: modal,
  coach: coachRegSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
