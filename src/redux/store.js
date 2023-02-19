import { configureStore } from "@reduxjs/toolkit";
import MealReducer from "./features/mealSlice";
import saveReducer from "./features/saveSlice"



export default configureStore({
    reducer:{
        app: MealReducer,
        save:saveReducer
    }
});