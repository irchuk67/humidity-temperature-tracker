import './sidebarMenu.scss';
import {useDispatch} from "react-redux";
import {showDay, showHour, showMonth, showWeek, showYear} from "../../redux/slice/periodToShowSlice";
const SidebarMenu = () => {
    const dispatch = useDispatch();

    return(
        <div className={'sidebar'}>
            <p className={'sidebar__item menu-item'} onClick={() => dispatch(showHour())}>By hour</p>
            <p className={'sidebar__item menu-item'} onClick={() => dispatch(showDay())}>By day</p>
            <p className={'sidebar__item menu-item'} onClick={() => dispatch(showWeek())}>By week</p>
            <p className={'sidebar__item menu-item'} onClick={() => dispatch(showMonth())}>By month</p>
            <p className={'sidebar__item menu-item'} onClick={() => dispatch(showYear())}>By year</p>
        </div>
    )
}

export default SidebarMenu;