import AverageValues from "./components/averageValues/averageValues";
import Statistics from "./components/statistics/statistics";
import TopMenu from "./components/topMenu/topMenu";
import SidebarMenu from "./components/sidebarMenu/sidebarMenu";

function App() {
  return (
    <div className="App">
        <AverageValues/>
        <div>
            <SidebarMenu/>
            <TopMenu/>
            <Statistics/>
        </div>
    </div>
  );
}

export default App;
