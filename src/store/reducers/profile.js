import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    profile: null,
    updateProfile: {},
    profiles: [],
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg4OTA2MTIsImV4cCI6MTY5ODkyNjYxMn0.XpSL7g0_tnhQXyCLZ-VsEfSyckyTldohIyJJmm33FnA';
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
        editProfile: (state, action) => {
            const index = state.profiles.findIndex(
                (profile) => profile.id === action.payload.id
            )
            if(index < 0) return;
            state.profiles[index] = action.payload;
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
export const {updateProfile, editProfile, addProfile } = profileSlice.actions;

const profileReducer = profileSlice.reducer;

export default profileReducer