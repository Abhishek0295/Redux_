import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{
        email: "",
        name: "",
        dob: "",
        gender: "",
        password: ""
    }]
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        signIn : (state, { payload }) => {
            console.log(payload)
            state.users = [payload]
        }
    }
})

export const {signIn} = registerSlice.actions;
export default registerSlice.reducer; 