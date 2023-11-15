import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    service: null,
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxYzM1M2Q1LWQxOGMtNGJjOC05MWQ2LWI1ZjM5Mzk5ZjljMyIsImVtYWlsIjoibmhvbTJAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaMOzbSAyIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAwMDQzNDg5LCJleHAiOjE3MDAwNzk0ODl9.F1K7YsyPqlgs4A7qLbhUUDXUkWTt3xHG5Bdx-TZdpuU';
localStorage.setItem('accessToken', token)

export const getService = createAsyncThunk(
    'service/getService',
    async () => {
        try {
            const result = await axiosInstance('/services')
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
        builder.addCase(getService.fulfilled, (state, actions) => {
            state.service = actions.payload;
        })
    }
})

// Action creators are generated for each case reducer function
export const {updateProfile } = serviceSlice.actions;

const serviceReducer = serviceSlice.reducer;

export default serviceReducer