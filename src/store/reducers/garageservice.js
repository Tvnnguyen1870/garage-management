import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    service: null,
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk2Njc0NzcsImV4cCI6MTY5OTcwMzQ3N30.pRZ53rsA3JXqmVVAfjQKkmomVieSytYHPmMxhmzVu20';
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