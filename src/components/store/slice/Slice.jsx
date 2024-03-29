import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:'user',
    intialState:[],
    reducers:{
        adduser(state,action){
            state.push(action.payload)},
        removeuser(state,action){},
        deleteuser(state,action){}
    },  

    });
    export default userSlice.reducer
    // console.log("UserSlice.reducer" ,UserSlice.reducer);
    // console.log("dataa",UserSlice.actions)

    export const{adduser}=userSlice.actions