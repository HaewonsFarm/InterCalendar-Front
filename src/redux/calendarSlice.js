import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BACKEND_ENDPOINT } from '../store/config/configSlice';

// const BACKEND_ENDPOINT = 'http://12.235.124.214';


// Mock flag
const useMock = true; // Set this to false to use real backend

// Mock responses
const mockEvents = [
  {
    id: 1,
    date: "2023-07-15",
    description: "Team Meeting",
    startTime: "10:00:00",
    endTime: "11:00:00",
  },
  {
    id: 2,
    date: "2023-07-16",
    description: "Project Presentation",
    startTime: "13:00:00",
    endTime: "14:00:00",
  },
];

const mockCreateScheduleResponse = {
  id: 3,
  date: "2023-07-17",
  description: "New Schedule",
  startTime: "09:00:00",
  endTime: "10:00:00",
};

export const fetchEvents = createAsyncThunk('calendar/fetchEvents', async () => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockEvents);
      }, 1000);
    });
  } else {
    const response = await axios.get(`${BACKEND_ENDPOINT}/api/calendar`);
    return response.data;
  }
});

export const createSchedule = createAsyncThunk('calendar/createSchedule', async ({ id, scheduleData }) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...mockCreateScheduleResponse, ...scheduleData });
      }, 1000);
    });
  } else {
    const response = await axios.post(`${BACKEND_ENDPOINT}/api/schedule/${id}`, scheduleData);
    return response.data;
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
        state.events.push(action.payload);
      })
      .addCase(createSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default calendarSlice.reducer;
