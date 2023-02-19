import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk("meals/fetchMeals",async() => {
    return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((res) => res.json())
});

export const fetchSingleMeal = createAsyncThunk("meals/fetchSingleMeal",async({id}) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json())
});

export const fetchSearchMeal = createAsyncThunk("meals/fetchSearchMeal",async({searchText}) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`).then((res) => res.json())
});

export const  mealSlice = createSlice({
    name: "meals",
    initialState: {
        meals: [],
        meal:[],
        loading: false,
        error: null
    },
   
    extraReducers:{
        [fetchMeals.pending]:(state, action) => {

            state.loading = true;
        },
        [fetchMeals.fulfilled]:(state, action) => {

            state.loading = false;
            state.meals = action.payload.meals
        },
        [fetchMeals.rejected]:(state, action) => {

            state.loading = false;
            state.error = action.payload
        },
        [fetchSingleMeal.pending]:(state, action) => {

            state.loading = true;
        },
        [fetchSingleMeal.fulfilled]:(state, action) => {

            state.loading = false;
            state.meal = action.payload.meals
        },
        [fetchSingleMeal.rejected]:(state, action) => {

            state.loading = false;
            state.error = action.payload
        },
        [fetchSearchMeal.pending]:(state, action) => {

            state.loading = false;
        },
        [fetchSearchMeal.fulfilled]:(state, action) => {

            state.loading = false;
            state.meals = action.payload.meals
        },
        [fetchSearchMeal.rejected]:(state, action) => {

            state.loading = false;
            state.error = action.payload
        },
        
    }
});



export default mealSlice.reducer;