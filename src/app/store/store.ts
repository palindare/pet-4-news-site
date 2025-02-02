"use client"
import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./slide/slide";

const store = configureStore({
  reducer: {
    currentSlide: slideReducer,  
  },
});

export default store;
