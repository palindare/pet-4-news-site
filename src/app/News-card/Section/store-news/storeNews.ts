"use client"
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/category";

const storeNews = configureStore({
  reducer: {
    currentCategory: categoryReducer,  
  },
});

export default storeNews;
