import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    password: '',
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTkyNTM0MzgsImV4cCI6MTY5OTI4OTQzOH0.wH3UxYAEmPXkk3dJItYcptVThkpl9sCSv5x4ACzpBgw';
localStorage.setItem('accessToken', token)

export const getPassword = createAsyncThunk(
    'password/getPassword',
    async () => {
        try {
            const result = await axiosInstance('auth/change-password')
            return result;
        } catch (error) {
            console.log(error);
        }
    }
)
        
export const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPassword.fulfilled, (state, actions) => {
            state.password = actions.payload;
        })
    }
})

// Action creators are generated for each case reducer function
export const { changePassword } = passwordSlice.actions;

const passwordReducer = passwordSlice.reducer;

export default passwordReducer