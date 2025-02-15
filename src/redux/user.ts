import { createSlice } from "@reduxjs/toolkit";

type user =  {
  id:number
  username :string
  name:string
  email:string
  avatar:string
  profileSetupStep:number
} | null

const initialState = {
  user: <user> null ,
  token: <string | null> null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData:(state,action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setUserInfo:(state,action) => {
      state.user = action.payload
    },
    logOut:(state) => { 
      state.user = null
      state.token = null
    }
  },
});

export const { setUserData , logOut ,setUserInfo} = userSlice.actions;

export default userSlice.reducer;