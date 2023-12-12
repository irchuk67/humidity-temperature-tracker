import {useEffect, useState} from "react";
import AverageValues from "./components/averageValues/averageValues";
import Statistics from "./components/statistics/statistics";
import TopMenu from "./components/topMenu/topMenu";
import SidebarMenu from "./components/sidebarMenu/sidebarMenu";
import {Loader} from 'rsuite';
import {temps} from './data';
import {hums} from './dataH';
import {useDispatch, useSelector} from "react-redux";
import {fetchRoomsList, selectRoomToShow} from "./redux/slice/roomsSlice";
import {setDataType} from "./redux/slice/dataTypeToShowSlice";
import {setPeriod} from "./redux/slice/periodToShowSlice";
import './base.scss';

function App() {
    const dispatch = useDispatch();
    const roomArr = useSelector(state => state.rooms)
    const roomToShow = useSelector(state => state.rooms.roomToShow);
    const selectedPeriod = useSelector(state => state.selectedPeriod)
    //за замовчуванням беремо температуру за місяць
    const chartType = useSelector(state => state.valueToShow.value);
    const chartPeriod = useSelector(state => state.periodToShow.period);
    const [chartData, setChartData] = useState(temps);
    const rooms = roomArr.data.map(room => <option value={room}>{room}</option>)

    useEffect(() => {
        dispatch(fetchRoomsList());
    }, []);

    const changeType = (str) => {
        dispatch(setDataType(str));
        //відправка запита
        //setChartData(newDataFromResponse);
    };

    const changePeriod = (str) => {
        dispatch(setPeriod(str));
        //відправка запита
        //тут просто можемо побачити, що графіки нормально переключаються
        //можемо змінити з місяця (за замовчуванням) на тиждень
        if (str === 'week') {
            setChartData(hums);
        } else {
            setChartData(temps);
        }

    };

    const handleRoomChange = (event) => {
        dispatch(selectRoomToShow(event.target.value));
    }

    return (
        <div className="app">
            <AverageValues/>
            <div className={'main-wrapper'}>
                <div className={"main-wrapper__heading"}>
                    <h3>Statistics</h3>
                    {
                        (!roomArr.loading & !roomArr.err) &&
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
                    <TopMenu changeChartType={changeType}/>
                    <Statistics type={chartType} period={chartPeriod} data={chartData}/>
                </div>
            </div>
        </div>
    );
}

export default App;
