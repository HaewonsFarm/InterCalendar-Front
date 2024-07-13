import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ENDPOINT = '12.235.124.214';

// 비동기 액션
export const createGroup = createAsyncThunk('group/createGroup', async (groupData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${ENDPOINT}/api/group`, groupData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const joinGroup = createAsyncThunk('group/joinGroup', async (groupId, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${ENDPOINT}/api/group/${groupId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchGroup = createAsyncThunk('group/fetchGroup', async (groupId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${ENDPOINT}/api/group/${groupId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateGroup = createAsyncThunk('group/updateGroup', async ({ groupId, updateData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${ENDPOINT}/api/group/${groupId}`, updateData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const groupSlice = createSlice({
  name: 'group',
  initialState: {
    group: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGroup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createGroup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.group = action.payload;
      })
      .addCase(createGroup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(joinGroup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(joinGroup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.group = action.payload;
      })
      .addCase(joinGroup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchGroup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGroup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.group = action.payload;
      })
      .addCase(fetchGroup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateGroup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateGroup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.group = action.payload;
      })
      .addCase(updateGroup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default groupSlice.reducer;
