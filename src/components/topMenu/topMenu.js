import './topMenu.scss';
import {useDispatch} from "react-redux";
import {showHumidity, showTemperature} from "../../redux/slice/dataTypeToShowSlice";

const TopMenu = () => {
    const dispath = useDispatch();
    return(
        <div className={'top-menu'}>
            <p className={'top-menu__item menu-item'} onClick={() => dispath(showTemperature())}>Temperature</p>
            <p className={'top-menu__item menu-item'} onClick={() => dispath(showHumidity())}>Humidity</p>
        </div>
    )
}

export default TopMenu;