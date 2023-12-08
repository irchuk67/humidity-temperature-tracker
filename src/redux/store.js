import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import {AverageValuesSlice} from "./slice/averageValuesSlice";
import {StatisticToShowSlice} from "./slice/statisticToShowSlice";

const store = configureStore({
    reducer: {
        averageValues: AverageValuesSlice.reducer,
        statistics: StatisticToShowSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store