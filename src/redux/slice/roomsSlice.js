import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getRoomsList} from "../../api/humidityTemperature";


const initialState = {
    loading: false,
    data: [],
    roomToShow: "1",
    err: ""
}

export const fetchRoomsList = createAsyncThunk(
    'rooms/getRoomsList',
    () => {
        return getRoomsList().then(
            response => response
        )
    }
)

const RoomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        selectRoomToShow: (state, action) => {
            // const roomToShowIndex = state.data.findIndex(el => el.id === action.payload);
            // state.roomToShow = state.data[roomToShowIndex].id;
            state.roomToShow = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchRoomsList.pending, state => {
            state.loading = true;
            state.data = [];
            state.err = "";
        })

        builder.addCase(fetchRoomsList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.roomToShow = action.payload[0].id;
            state.err = ""
        })

        builder.addCase(fetchRoomsList.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.err = action.error.message ? action.error.message : "error";
        })
    }
})

export default RoomsSlice.reducer;

export const {selectRoomToShow} = RoomsSlice.actions;