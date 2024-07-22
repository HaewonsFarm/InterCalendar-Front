import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_ENDPOINT } from "../store/config/configSlice";

export const createGroup = createAsyncThunk(
  "group/createGroup",
  async (groupData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_ENDPOINT}/api/group`,
        groupData
      );
      // return response.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const joinGroup = createAsyncThunk(
  "group/joinGroup",
  async (groupId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_ENDPOINT}/api/group/${groupId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGroup = createAsyncThunk(
  "group/fetchGroup",
  async (groupId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BACKEND_ENDPOINT}/api/group/${groupId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateGroup = createAsyncThunk(
  "group/updateGroup",
  async ({ groupId, updateData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BACKEND_ENDPOINT}/api/group/${groupId}`,
        updateData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGroups = createAsyncThunk(
  "group/fetchGroups",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_ENDPOINT}/api/group`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// new thunk to fetch best meeting time
export const findBestMeetingTime = createAsyncThunk(
  'group/findBestMeetingTime', async (groupId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_ENDPOINT}/api/group/best-meeting-time/${groupId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });


const groupSlice = createSlice({
  name: "group",
  initialState: {
    groups: [],
    group: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGroup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groups.push(action.payload);
      })
      .addCase(createGroup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(joinGroup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(joinGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.group = action.payload;
      })
      .addCase(joinGroup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchGroup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.group = action.payload;
      })
      .addCase(fetchGroup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateGroup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateGroup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.group = action.payload;
      })
      .addCase(updateGroup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchGroups.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groups = action.payload;
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(findBestMeetingTime.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(findBestMeetingTime.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.findBestMeetingTime = action.payload;
      })
      .addCase(findBestMeetingTime.rejected, (state, action) => {
        state.status = 'failed';
        state.error= action.payload;
      });
  },
});

export default groupSlice.reducer;
