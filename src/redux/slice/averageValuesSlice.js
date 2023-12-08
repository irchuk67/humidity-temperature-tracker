import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: {
        humidity: 0,
        temperature: 0
    },
    error: ""
}

export const AverageValuesSlice = createSlice(
    {
        name: "averageValues",
        initialState,
        reducers: {},
        extraReducers: builder => {}
    }
)