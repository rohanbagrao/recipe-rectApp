import { configureStore } from "@reduxjs/toolkit";
import MealReducer from "./features/mealSlice";




export default configureStore({
    reducer:{
        app: MealReducer
  
    }
});