import './statistics.scss';
import {useSelector} from "react-redux";
const Statistics = () => {
    const valueToShow = useSelector(state => state.valueToShow.value);
    const periodToShow = useSelector(state => state.periodToShow.period);

    return (
        <div>
            Statistics
        </div>
    )
}

export default Statistics;