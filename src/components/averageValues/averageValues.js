import {useSelector} from "react-redux";
import temperatureImg from "../../assets/temperature_3815449.png";
import humidityImg from "../../assets/humidity_7687104.png";
import img314 from "../../assets/thumb_6eb88d.jpg"
import {Loader} from "rsuite";
import './averageValues.scss';

const AverageValues = () => {
    const averageValues = useSelector(state => {
        return state.averageValues
    });
    const location_id = useSelector(state => state.rooms.roomToShow);

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
                            <span>{Number(averageValues.data.temperature).toFixed(3)} &deg;C</span>
                        }
                    </p>
                </div>
                <img src={Number(location_id) === 13 ? img314 : temperatureImg}
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
                            <span>{Number(averageValues.data.humidity).toFixed(3)} &deg;C</span>
                        }
                    </p>

                </div>
                <img src={Number(location_id) === 13 ? img314 : humidityImg}
                     alt={"humidity icon"}
                     className={"average__item--icon"}
                />
            </div>
        </div>
    )
}

export default AverageValues;