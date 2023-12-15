import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getStatisticData} from "../../api/humidityTemperature";

const initialState = {
    loading: false,
    data: {
        data: []
    },
    error: ""
}

export const fetchStatisticData = createAsyncThunk(
    'statistics/getStatisticData',
    async (requestData) => {
        console.log("fetch statistics")
        const {locationId, startDate, endDate} = requestData;
        return  getStatisticData(locationId, startDate, endDate).then(response => response);
    }
)

export const StatisticToShowSlice = createSlice(
    {
        name: "statistics",
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(fetchStatisticData.pending, state => {
                console.log("send request")
                state.loading = true;
                state.data = {
                    data: []
                };
                state.error = "";
            })

            builder.addCase(fetchStatisticData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = ""
            })

            builder.addCase(fetchStatisticData.rejected, (state, action) => {
                state.loading = false;
                state.data = {
                    data: []
                };
                state.error = action.error.message ? action.error.message : "error";
            })
        }
    }
)