import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: "temperature"
}

const DataTypeToShowSlice = createSlice({
    name: "valueToShow",
    initialState,
    reducers: {
        setDataType: (state, action) => {
            state.value = action.payload
        },
    }
})

export default DataTypeToShowSlice.reducer;

export const {setDataType} = DataTypeToShowSlice.actions
