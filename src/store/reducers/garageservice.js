import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    service: null,
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk5NTE4NjIsImV4cCI6MTY5OTk4Nzg2Mn0.0FPKLl0NZGLosf_PKZuO57JbFrTRWZQp_j32C0XhSA0';
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