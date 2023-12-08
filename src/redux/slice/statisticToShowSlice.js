import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const StatisticToShowSlice = createSlice(
    {
        name: "statistics",
        initialState,
        reducers: {},
        extraReducers: builder => {}
    }
)