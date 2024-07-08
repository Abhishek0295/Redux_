import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
  }

export const countSlice = createSlice({
    name: "count",
    initialState,
    reducers:{
        decrement: (state, action) => {
            
            console.log(action.payload)
            state.count = state.count - 1
            
            
        },
        increment: (state, action) => {
            state.count = state.count + 1
        },
    }
  })

  export const {decrement, increment} = countSlice.actions;

  export default countSlice.reducer;

