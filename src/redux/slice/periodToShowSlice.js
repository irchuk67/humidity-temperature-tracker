import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    period: "day"
}

export const PeriodToShowSlice = createSlice({
    name: "periodToShow",
    initialState,
    reducers: {
        showHour: (state) => {
            state.period = "hour"
        },
        showDay: (state) => {
            state.period = "day"
        },
        showWeek: (state) => {
            state.period = "week"
        },
        showMonth: (state) => {
            state.period = "month"
        },
        showYear: (state) => {
            state.period = "year"
        }
    }
})

export default PeriodToShowSlice.reducer;
export const {showDay, showHour, showMonth, showWeek, showYear} = PeriodToShowSlice.actions;