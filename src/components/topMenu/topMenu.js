import './topMenu.scss';

const TopMenu = ({ changeChartType }) => {
    return(
        <div className={'top-menu'}>
            <p
                className={'top-menu__item menu-item'}
                onClick={() => changeChartType('temperature')}
            >Temperature</p>
            <p
                className={'top-menu__item menu-item'}
                onClick={() => changeChartType('humidity')}
            >Humidity</p>
        </div>
    )
}

export default TopMenu;