import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAverage} from "../../api/humidityTemperature";

const initialState = {
    loading: false,
    data: {
        humidity: 0,
        temperature: 0
    },
    error: ""
}

export const fetchAverageData = createAsyncThunk(
    'averageValues/getAverageData',
    async (requestData) => {
        const {locationId, startDate, endDate}  = requestData;
        const response = await getAverage(locationId, startDate, endDate);
        return response;
    }
)
export const AverageValuesSlice = createSlice(
    {
        name: "averageValues",
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(fetchAverageData.pending, state => {
                state.loading = true;
                state.data = {};
                state.error = "";
            })

            builder.addCase(fetchAverageData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = ""
            })

            builder.addCase(fetchAverageData.rejected, (state, action) => {
                state.loading = false;
                state.data = {};
                state.error = action.error.message ? action.error.message : "error";
            })
        }
    }
)