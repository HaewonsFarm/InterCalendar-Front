import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_ENDPOINT } from "../store/config/configSlice";

export const fetchEvents = createAsyncThunk(
  "calendar/fetchEvents",
  async (groupId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        // `${BACKEND_ENDPOINT}/api/group/${groupId}`
        // `${BACKEND_ENDPOINT}/api/group`
        `${BACKEND_ENDPOINT}/api/schedule`, {params: { groupId }}
      );
      console.log(response.status);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createSchedule = createAsyncThunk(
  "calendar/createSchedule",
  async ({ id, scheduleData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_ENDPOINT}/api/schedule/${id}`,
        scheduleData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// new thunks to update, get, delete schedules
export const updateSchedule = createAsyncThunk('calendar/updateSchedule', async ({ id, scheduleData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${BACKEND_ENDPOINT}/api/schedule/${id}`, scheduleData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const getSchedule = createAsyncThunk('calendar/getSchedule', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/api/schedule/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const getScheduleByMonth = createAsyncThunk('calendar/getScheduleByMonth', async (monthData, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/api/schedule`, { params: monthData });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const deleteSchedule = createAsyncThunk('calendar/deleteSchedule', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${BACKEND_ENDPOINT}/api/schedule/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


const calendarSlice = createSlice({
  name: "calendar",
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
      })
      .addCase(updateSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getScheduleByMonth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getScheduleByMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getScheduleByMonth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default calendarSlice.reducer;
