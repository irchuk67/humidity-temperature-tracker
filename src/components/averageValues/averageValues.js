import {useSelector} from "react-redux";
import temperatureImg from "../../assets/temperature_3815449.png";
import humidityImg from "../../assets/humidity_7687104.png";
import {Loader} from "rsuite";
import './averageValues.scss';

const AverageValues = () => {
    const averageValues = useSelector(state => {
        return state.averageValues
    });

    return (
        <div className={"average"}>
            <div className={"average__item average__temperature"}>
                <div className={"average__title"}>
                    <p className={"average__heading"}>Average Temperature</p>
                    <p className={"average__value"}>
                        {
                            averageValues.loading && <Loader/>
                        }
                        {(!averageValues.loading && !averageValues.error) &&
                            <span>{averageValues.data.temperature} &deg;C</span>
                        }
                    </p>
                </div>
                <img src={temperatureImg}
                     alt={"temperature icon"}
                     className={"average__item--icon"}
                />
            </div>
            <div className={"average__item average__humidity"}>
                <div className={"average__title"}>
                    <p className={"average__heading"}>Average Humidity</p>
                    <p className={"average__value"}>
                        {
                            averageValues.loading && <Loader/>
                        }
                        {(!averageValues.loading && !averageValues.error) &&
                            <span>{averageValues.data.humidity} &deg;C</span>
                        }
                    </p>

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