import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    profile: null,
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg4OTIwOTEsImV4cCI6MTY5ODkyODA5MX0.tmFyCO5zvTUa_gKU7C3Mm2tMRflIesgMWb3GJZoeyqE';
localStorage.setItem('accessToken', token)

export const getProfile = createAsyncThunk(
    'service/getService',
    async () => {
        try {
            const result = await axiosInstance('auth/service')
            return result.data.data;
        } catch (error) {
            console.log(error);
        }
    }
)
        
export const serviceSlice = createSlice({
    name: 'service',
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
export const {updateProfile } = serviceSlice.actions;

const serviceReducer = serviceSlice.reducer;

export default serviceReducer