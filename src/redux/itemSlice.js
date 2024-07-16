import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_ENDPOINT } from '../store/config/configSlice';

export const createItem = createAsyncThunk('item/createItem', async (itemData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BACKEND_ENDPOINT}/api/item`, itemData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateItem = createAsyncThunk('item/updateItem', async ({ id, ...itemData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${BACKEND_ENDPOINT}/api/item/${id}`, itemData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchItem = createAsyncThunk('item/fetchItem', async (itemId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/api/${itemId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteItem = createAsyncThunk('item/deleteItem', async (itemId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${BACKEND_ENDPOINT}/api/${itemId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    item: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.item = action.payload;
      })
      .addCase(createItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.item = action.payload;
      })
      .addCase(fetchItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.item = action.payload;
      })
      .addCase(updateItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.item = null;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default itemSlice.reducer;
