import {DateRangePicker} from 'rsuite';
import './topMenu.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectPeriod} from "../../redux/slice/selectedPeriodSlice";

const TopMenu = ({changeChartType}) => {
    const dispatch = useDispatch();
    const selectedPeriod = useSelector(state => state.selectedPeriod.data);
    const chartPeriod = useSelector(state => state.periodToShow.period);
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
                (chartPeriod==="own period") &&
                <div className={'top-menu__dateTime'}>
                    <DateRangePicker
                        format="yyyy-MM-dd HH:mm:ss"
                        value={selectedPeriod}
                        size={'sm'}
                        showOneCalendar
                        placementOverflow={false}
                        onChange={(value) => dispatch(selectPeriod(value))}
                    />
                </div>
            }
        </div>
    )
}

export default TopMenu;