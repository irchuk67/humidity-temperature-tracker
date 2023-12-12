import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    startDate: new Date() - 1,
    endDate: new Date()
}

const SelectedPeriodSlice = createSlice(
    {
        name: "selectedPeriod",
        initialState,
        reducers: {
            selectPeriod: (state, action) => {
                state.startDate = new Date(action.payload[0]);
                state.endDate = new Date(action.payload[1])
            }
        },
        extraReducers: builder => {
        }
    }
)

export default SelectedPeriodSlice.reducer;
export const {selectPeriod} = SelectedPeriodSlice.actions;