import {DateRangePicker} from 'rsuite';
import './topMenu.scss';
import { useSelector} from "react-redux";


const TopMenu = ({changeChartType, onDatePeriodChange}) => {
    const chartPeriod = useSelector(state => state.periodToShow);

    return (
        <div className={'top-menu'}>
            <div className={'top-menu__chart-type'}>
                <p
                    className={'top-menu__item menu-item'}
                    onClick={() => changeChartType('temperature')}
                >Temperature</p>
                <p
                    className={'top-menu__item menu-item'}
                    onClick={() => changeChartType('humidity')}
                >Humidity</p>
            </div>
            {
                (chartPeriod.period === "own period") &&
                <div className={'top-menu__dateTime'}>
                    <DateRangePicker
                        format="yyyy-MM-dd HH:mm:ss"
                        value={[chartPeriod.startDate, chartPeriod.endDate]}
                        size={'sm'}
                        showOneCalendar
                        placementOverflow={false}
                        onChange={(value) => onDatePeriodChange(value)}
                    />
                </div>
            }
        </div>
    )
}

export default TopMenu;