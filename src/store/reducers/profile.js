import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    profile: null,
    profiles: [],
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk5NTE4NjIsImV4cCI6MTY5OTk4Nzg2Mn0.0FPKLl0NZGLosf_PKZuO57JbFrTRWZQp_j32C0XhSA0';

localStorage.setItem('accessToken', token)

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async () => {
        try {
            const result = await axiosInstance.get('auth/profile')
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
        editProfile: (state, action) => {
            state.profiles.push(action.payload)
        },
        addProfile: (state, action) => {
            state.profiles.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, actions) => {
            state.profile = actions.payload;
        })
    }
})

// Action creators are generated for each case reducer function
export const { editProfile, addProfile } = profileSlice.actions;

const profileReducer = profileSlice.reducer;

export default profileReducer