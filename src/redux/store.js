import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import {AverageValuesSlice} from "./slice/averageValuesSlice";
import {StatisticToShowSlice} from "./slice/statisticToShowSlice";
import PeriodToShow from "./slice/periodToShowSlice";
import ValueToShow from "./slice/dataTypeToShowSlice";
import RoomsSlice from "./slice/roomsSlice";

const store = configureStore({
    reducer: {
        averageValues: AverageValuesSlice.reducer,
        statistics: StatisticToShowSlice.reducer,
        periodToShow: PeriodToShow,
        valueToShow: ValueToShow,
        rooms: RoomsSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store