import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    period: "day"
}

export const PeriodToShowSlice = createSlice({
    name: "periodToShow",
    initialState,
    reducers: {
        setPeriod: (state, action) => {
            state.period = action.payload;
        }
    }
})

export default PeriodToShowSlice.reducer;
export const {setPeriod} = PeriodToShowSlice.actions;