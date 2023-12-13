import './sidebarMenu.scss';
const SidebarMenu = ({ changeChartPeriod }) => {
    return(
        <div className={'sidebar'}>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('hour')}}
            >For last hour</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('day')}}
            >For last day</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('week')}}
            >For last week</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('month')}}
            >For last month</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('year')}}
            >For last year</p>
            <p
                className={'sidebar__item menu-item'}
                onClick={() => {changeChartPeriod('own period')}}
            >For own period</p>
        </div>
    )
}

export default SidebarMenu;