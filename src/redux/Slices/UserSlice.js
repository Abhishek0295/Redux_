import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    users: [{
        name: JSON.parse(localStorage.getItem("users")) || "" ,
        id: 1,
        age: "",
        city: ""
    }]
}


export const userSlice = createSlice({  
    name: "User",
    initialState,
    reducers: {
        addUser: (state, {payload}) =>{
            // console.log("nwq=>", ...state.users);

            // console.log(payload)
  
            state.users = [payload];
            localStorage.setItem("userData", JSON.stringify([payload]))

        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;