import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { thunk } from 'redux-thunk';

// Define async thunks for API calls
export const fetchApiData1 = createAsyncThunk('counter/fetchApiData1', async () => {
  try {
    const response = await axios.get('api_endpoint_1', {
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        // Add other headers as needed
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchApiData2 = createAsyncThunk('counter/fetchApiData2', async () => {
  try {
    const response = await axios.get('api_endpoint_2', {
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        // Add other headers as needed
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0,
      apiData1: null,
      apiData2: null,
      loading: false,
      error: null,
    },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchApiData1.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchApiData1.fulfilled, (state, action) => {
          state.loading = false;
          state.apiData1 = action.payload;
        })
        .addCase(fetchApiData1.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchApiData2.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchApiData2.fulfilled, (state, action) => {
          state.loading = false;
          state.apiData2 = action.payload;
        })
        .addCase(fetchApiData2.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  

const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
    middleware: [thunk]
  });
  
  // Export actions for components to use
  export const { increment, decrement } = counterSlice.actions;
  
  export default store;