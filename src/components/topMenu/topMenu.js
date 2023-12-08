import './topMenu.scss';
const TopMenu = () => {
    return(
        <div className={'top-menu'}>
            <p className={'top-menu__item menu-item'}>Temperature</p>
            <p className={'top-menu__item menu-item'}>Humidity</p>
        </div>
    )
}

export default TopMenu;