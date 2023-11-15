// /* eslint-disable no-useless-catch */
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axiosInstance from "../../services/axios.service"
// axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
// const initialState = {

//   description: '',

// garages: [],
// Id : '',
// maxPrice : 0,
// minPrice : 0,
// name: '',

 
 
 
// }

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxYzM1M2Q1LWQxOGMtNGJjOC05MWQ2LWI1ZjM5Mzk5ZjljMyIsImVtYWlsIjoibmhvbTJAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaMOzbSAyIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAwMDI1MTI2LCJleHAiOjE3MDAwNjExMjZ9.8CcCP24zMlRD4lFd3LaaSaT8EaP5fIB_wjWWF1bOtbM'
// localStorage.setItem('accessToken', token )

// export const fetchServices = createAsyncThunk('service/fetchServices', async (payload) => {
//   try {
//     const response = await axiosInstance.get('services', {
//       params: payload
//     });
//     return response.data.data; 
//   } catch (error) {
//     throw error; 
//   }
// });

// export const fetchServicesById = createAsyncThunk('service/fetchServicesById', async (payload) => {
//   try {
//     const response = await axiosInstance.get(`/services/${payload}`)
//     console.log(response);
//     return response.data.data; 
   
//   } catch (error) {
//     throw error; 
//   }
// });
 

// export const createNewService = createAsyncThunk('service/createNewService', async (serviceData) => {
//   try {
//     const response = await axiosInstance.post('services', serviceData);
//     return response.data.data;
//   } catch (error) {
//     throw error;
//   }
// });


// console.log(fetchServicesById)


// const ownerSlice = createSlice({
//   name: 'service',
//   initialState,
//   reducers: {
    

//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchServices.fulfilled, (state, action) => {
//       state.manageService = action.payload;
//     });
//     builder.addCase(fetchServicesById.fulfilled, (state, action) => {
//       state.serviceByIdData = action.payload;
//     });
//     // builder.addCase(fetchServicesById.fulfilled, (state, action) => {
//     //     state.userByIdData = action.payload;
//     //   });
  
//   },
// })
// const serviceReducer = ownerSlice.reducer
// export default serviceReducer