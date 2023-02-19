import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedRecipe: []
};
 
const saveSlice = createSlice({
    name: "save",
    initialState,
    reducers: {
        addToSave(state,action){
            state.cartItems.push(action.payload);
        }
    }

})
export const {addToSave} = saveSlice.actions;

export default saveSlice.reducer;
