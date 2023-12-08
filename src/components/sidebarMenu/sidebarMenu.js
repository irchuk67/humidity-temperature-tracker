import './sidebarMenu.scss';
const SidebarMenu = () => {
    return(
        <div className={'sidebar'}>
            <p className={'sidebar__item menu-item'}>By hour</p>
            <p className={'sidebar__item menu-item'}>By day</p>
            <p className={'sidebar__item menu-item'}>By week</p>
            <p className={'sidebar__item menu-item'}>By month</p>
            <p className={'sidebar__item menu-item'}>By year</p>
        </div>
    )
}

export default SidebarMenu;