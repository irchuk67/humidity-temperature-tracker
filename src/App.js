import {useEffect, useState} from "react";
import AverageValues from "./components/averageValues/averageValues";
import Statistics from "./components/statistics/statistics";
import TopMenu from "./components/topMenu/topMenu";
import SidebarMenu from "./components/sidebarMenu/sidebarMenu";
import {Loader} from 'rsuite';
import {useDispatch, useSelector} from "react-redux";
import {fetchRoomsList, selectRoomToShow} from "./redux/slice/roomsSlice";
import {setDataType} from "./redux/slice/dataTypeToShowSlice";
import {setOwnPeriod, setPeriod} from "./redux/slice/periodToShowSlice";
import './base.scss';
import {fetchStatisticData} from "./redux/slice/statisticToShowSlice";
import {fetchAverageData} from "./redux/slice/averageValuesSlice";

function App() {
    const dispatch = useDispatch();
    const roomArr = useSelector(state => state.rooms)
    const roomToShow = useSelector(state => state.rooms.roomToShow);
    //за замовчуванням беремо температуру за місяць
    const chartType = useSelector(state => state.valueToShow.value);
    const chartPeriod = useSelector(state => state.periodToShow.period);
    const startDate = useSelector(state => state.periodToShow.startDate);
    const endDate = useSelector(state => state.periodToShow.endDate);
    const rooms = roomArr.data.map(room => <option value={room.name} key={room.id}>{room.name}</option>)

    useEffect(() => {
        const requestData = {roomToShow, startDate, endDate};
        dispatch(fetchRoomsList());
        dispatch(fetchAverageData(requestData));
        dispatch(fetchStatisticData(requestData));
    }, []);

    const changeType = (str) => {
        dispatch(setDataType(str));
    };

    const changePeriod = (str) => {
        dispatch(setPeriod(str));
        // відправка запита
        // в запит кидаємо startDate, endDate, id of selected room
        const requestData = {roomToShow, startDate, endDate};
        dispatch(fetchStatisticData(requestData));
        dispatch(fetchAverageData(requestData));
        //тут просто можемо побачити, що графіки нормально переключаються
        //можемо змінити з місяця (за замовчуванням) на тиждень
        // if (str === 'week') {
        //     setChartData(hums);
        // } else {
        //     setChartData(temps);
        // }

    };

    const handleRoomChange = (event) => {
        dispatch(selectRoomToShow(event.target.value));
        const requestData = {roomToShow, startDate, endDate};
        dispatch(fetchStatisticData(requestData));
        dispatch(fetchAverageData(requestData));
    }

    const onDatePeriodChange = (values) =>{
        dispatch(setOwnPeriod(values))
        const requestData = {roomToShow, startDate, endDate};
        dispatch(fetchStatisticData(requestData));
        dispatch(fetchAverageData(requestData));
    }

    return (
        <div className="app">
            <AverageValues/>
            <div className={'main-wrapper'}>
                <div className={"main-wrapper__heading"}>
                    <h3>Statistics</h3>
                    {
                        (!roomArr.loading & !roomArr.error) &&
                        <select
                            className={"room-selector"}
                            value={roomToShow}
                            onChange={handleRoomChange}>
                            {rooms}
                        </select>
                    }
                    {
                        roomArr.loading && <Loader/>
                    }

                </div>
                <div className={'main-wrapper__content'}>
                    <SidebarMenu changeChartPeriod={changePeriod}/>
                    <TopMenu changeChartType={changeType} onDatePeriodChange={onDatePeriodChange}/>
                    <Statistics type={chartType} period={chartPeriod}/>
                </div>
            </div>
        </div>
    );
}

export default App;
