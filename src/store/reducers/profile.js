import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    profile: null,
    profiles: [],
}

<<<<<<< HEAD
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk5NDkyMDksImV4cCI6MTY5OTk4NTIwOX0.rG3rIV5ocEFJHIgju-W3rWWpPNewWw6RxWVY_rFlesE';
=======
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk4NDg4MzMsImV4cCI6MTY5OTg4NDgzM30.XDse2fHbzVlM3o116AXY4KQgbrQI-XTYv4sPhmkt2p8';
>>>>>>> fa874b2a51be27faa8c603a5037b96febef08ca4

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