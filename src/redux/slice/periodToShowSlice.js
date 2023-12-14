import {createSlice} from "@reduxjs/toolkit";

const initialEndDate = new Date();
const initialStartDate = new Date();
initialStartDate.setMonth(initialStartDate.getMonth() - 1);
const initialState = {
    period: "month",
    startDate: initialStartDate,
    endDate: initialEndDate
};

export const PeriodToShowSlice = createSlice({
    name: "periodToShow",
    initialState,
    reducers: {
        setPeriod: (state, action) => {
            state.period = action.payload;
            if (action.payload === 'year') {
                state.endDate = new Date();
                state.startDate = new Date();
                state.startDate.setFullYear(state.endDate.getFullYear() - 1);
            } else if (action.payload === 'month') {
                state.endDate = new Date();
                state.startDate = new Date();
                state.startDate.setDate(state.endDate.getMonth() - 1);
            } else if (action.payload === 'week') {
                state.endDate = new Date();
                state.startDate = new Date();
                state.startDate.setDate(state.endDate.getDate() - 7);
            } else if (action.payload === 'day') {
                state.endDate = new Date();
                state.startDate = new Date();
                state.startDate.setDate(state.endDate.getDate() - 1);
            } else if (action.payload === 'hour') {
                state.endDate = new Date();
                state.startDate = new Date();
                state.startDate.setHours(state.endDate.getHours() - 1);
            }
        }
    }
});

export default PeriodToShowSlice.reducer;
export const {setPeriod} = PeriodToShowSlice.actions;