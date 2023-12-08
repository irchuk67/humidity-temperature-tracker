import AverageValues from "./components/averageValues/averageValues";
import Statistics from "./components/statistics/statistics";
import TopMenu from "./components/topMenu/topMenu";
import SidebarMenu from "./components/sidebarMenu/sidebarMenu";
import './base.scss';

function App() {
  return (
    <div className="app">
        <AverageValues/>
        <div className={'main-wrapper'}>
            <h3>Statistic</h3>
            <SidebarMenu/>
            <TopMenu/>
            <Statistics/>
        </div>
    </div>
  );
}

export default App;
