import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    profile: null,
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg5Mzc3MTYsImV4cCI6MTY5ODk3MzcxNn0.0m9ZB0Ta4fe8A5mgPsseEOyYGgCj9PO_ck4atj-V8y4';
localStorage.setItem('accessToken', token)

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async () => {
        try {
            const result = await axiosInstance('auth/profile')
            return result.data.data;
        } catch (error) {
            console.log(error);
        }
    }
)
        
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, actions) => {
            state.profile = actions.payload;
        })
    }
})

// Action creators are generated for each case reducer function
export const {updateProfile } = profileSlice.actions;

const profileReducer = profileSlice.reducer;

export default profileReducer