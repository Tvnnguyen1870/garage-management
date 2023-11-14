/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../services/axios.service"
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
 manageService: null,
 serviceByIdData: null,
 createServiceData: {
  name: 'string',
  description: 'string',
  minPrice: 0,
  maxPrice: 0,
}
}
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk5MzMwMzksImV4cCI6MTY5OTk2OTAzOX0.b8xLjG276TSoHK-iJZOgY3gY8yJB8vNEVVEKfPwpF_U'
localStorage.setItem('accessToken', token )
export const fetchServices = createAsyncThunk('service/fetchServices', async (payload) => {
  try {
    const response = await axiosInstance.get('services', {
      params: payload
    });
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});
export const fetchServicesById = createAsyncThunk('owner/fetchServicesById', async (payload) => {
  try {
    const response = await axiosInstance.get(`/services/${payload}`)
    return response.data.data; 
  } catch (error) {
    throw error; 
  }
});
export const createNewService = createAsyncThunk('service/createNewService', async (serviceData) => {
  try {
    const response = await axiosInstance.post('services', serviceData);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});


const ownerSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    

  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.manageService = action.payload;
    });
    builder.addCase(fetchServicesById.fulfilled, (state, action) => {
      state.serviceByIdData = action.payload;
    });
  
  },
})
const serviceReducer = ownerSlice.reducer
export default serviceReducer