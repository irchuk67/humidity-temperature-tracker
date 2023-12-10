import {useSelector} from "react-redux";
import temperatureImg from "../../assets/temperature_3815449.png";
import humidityImg from "../../assets/humidity_7687104.png";
import './averageValues.scss';

const AverageValues = () => {
    const humidity = useSelector(state => state.averageValues.data.humidity);
    const temperature = useSelector(state => state.averageValues.data.temperature);

    return(
        <div className={"average"}>
            <div className={"average__item average__temperature"}>
                <div className={"average__title"}>
                    <p className={"average__heading"}>Average Temperature</p>
                    <p className={"average__value"}>{temperature} &deg;C</p>
                </div>
                <img src={temperatureImg}
                     alt={"temperature icon"}
                     className={"average__item--icon"}
                />
            </div>
            <div className={"average__item average__humidity"}>
                <div className={"average__title"}>
                    <p className={"average__heading"}>Average Humidity</p>
                    <p className={"average__value"}>{humidity} %</p>

                </div>
                <img src={humidityImg}
                     alt={"humidity icon"}
                     className={"average__item--icon"}
                />
            </div>
        </div>
    )
}

export default AverageValues;