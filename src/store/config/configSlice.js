import { createSlice } from "@reduxjs/toolkit";

// const BACKEND_ENDPOINT = 'https://intercalendar.xyz';
const BACKEND_ENDPOINT = "http://12.235.124.214";

export const configSlice = createSlice(
    {
        name : "config",
        initialState : {
            BACKEND_ENDPOINT : BACKEND_ENDPOINT,
        },
        reducers : {}
    }
)

export {BACKEND_ENDPOINT};
export default configSlice.reducer;