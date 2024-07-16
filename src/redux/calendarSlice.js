import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BACKEND_ENDPOINT } from '../store/config/configSlice';

export const fetchEvents = createAsyncThunk('calendar/fetchEvents', async (groupId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${ENDPOINT}/api/group/${groupId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const createSchedule = createAsyncThunk('calendar/createSchedule', async ({ id, scheduleData }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BACKEND_ENDPOINT}/api/${id}`, scheduleData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default calendarSlice.reducer;
