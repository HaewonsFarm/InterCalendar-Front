import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ENDPOINT = '12.235.124.214';

// 비동기 액션
export const createItem = createAsyncThunk('item/createItem', async (itemData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${ENDPOINT}/api/item`, itemData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateItem = createAsyncThunk('item/updateItem', async ({ id, ...itemData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${ENDPOINT}/api/item/${id}`, itemData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchItem = createAsyncThunk('item/fetchItem', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${ENDPOINT}/api/item/${id}`);
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
      });
  },
});

export default itemSlice.reducer;
