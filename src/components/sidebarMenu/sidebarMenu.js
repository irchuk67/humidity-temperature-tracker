import './sidebarMenu.scss';
const SidebarMenu = ({ changeChartPeriod }) => {
    return(
        <div className={'sidebar'}>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('hour')}}
            >By hour</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('day')}}
            >By day</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('week')}}
            >By week</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('month')}}
            >By month</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('year')}}
            >By year</p>
        </div>
    )
}

export default SidebarMenu;