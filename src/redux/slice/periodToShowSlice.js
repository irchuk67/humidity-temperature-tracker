import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    period: "day"
}

export const PeriodToShow = createSlice({
    name: "periodToShow",
    initialState,
    reducers: {}
})