import { useState } from "react";
import AverageValues from "./components/averageValues/averageValues";
import Statistics from "./components/statistics/statistics";
import TopMenu from "./components/topMenu/topMenu";
import SidebarMenu from "./components/sidebarMenu/sidebarMenu";
import './base.scss';

import {temps} from './data';
import {hums} from './dataH';

function App() {
    //за замовчуванням беремо температуру за місяць
    const [chartType, setCharType] = useState('temperature');
    const [chartPeriod, setChartPeriod] = useState('month');
    const [chartData, setChartData] = useState(temps);

    const changeType = (str) => {
        setCharType(str);
        //відправка запита
        //setChartData(newDataFromResponse);
    };

    const changePeriod = (str) => {
        setChartPeriod(str);
        //відправка запита
        //тут просто можемо побачити, що графіки нормально переключаються
        //можемо змінити з місяця (за замовчуванням) на тиждень
        if (str === 'week'){
            setChartData(hums);
        } else {
            setChartData(temps);
        }

    };

    return (
        <div className="app">
            <AverageValues/>
            <div className={'main-wrapper'}>
                <h3>Statistics</h3>
                <SidebarMenu changeChartPeriod={changePeriod}/>
                <TopMenu changeChartType={changeType}/>
                <Statistics type={chartType} period={chartPeriod} data={chartData}/>
            </div>
        </div>
    );
}

export default App;
