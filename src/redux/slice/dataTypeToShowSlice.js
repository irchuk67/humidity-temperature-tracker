import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: "temperature"
}
const DataTypeToShowSlice = createSlice({
    name: "valueToShow",
    initialState,
    reducers: {
        showTemperature: (state) => {
            state.value = "temperature"
        },
        showHumidity: (state) => {
            state.value = "humidity"
        }
    }
})

export default DataTypeToShowSlice.reducer;

export const {showTemperature, showHumidity} = DataTypeToShowSlice.actions
