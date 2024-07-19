import { createSlice } from "@reduxjs/toolkit";

// const BACKEND_ENDPOINT = 'https://intercalendar.xyz';
const BACKEND_ENDPOINT = "https://intercalendar.xyz";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    BACKEND_ENDPOINT: BACKEND_ENDPOINT,
  },
  reducers: {},
});

export {BACKEND_ENDPOINT};
export default configSlice.reducer;
