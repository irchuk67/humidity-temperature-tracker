import {temps} from '../data';
import {hums} from '../dataH';
// GET: "api/rooms"
// Респонс:
// {
//   [
//     {id: number, name: string},
//     {...},
//     {...}
//   ]
// }
const getRoomsList = () => {
    return fetch('http://localhost:8080/api/rooms')
        .then((response) => response.json());
}

// GET "api/average?location_id=location_id&start_date=start_date&end_date=end_date"
// Респонс:
// {
//   temperature: number,
//   humidity: number
// }
const getAverage = (locationId, startDate, endDate) => {
    return fetch(`http://localhost:8080/api/average?location=${locationId}&startDate=${startDate.getTime()}&endDate=${endDate.getTime()}`)
        .then((response) => response.json());
}

// "api/data?location_id=location_id&start_date=start_date&end_date=end_date"
// Респонс:
// {
//   "sensor_id": 2,
//   "location": "test",
//   "data": [
//     {
//        "humidity": 30.5,
//         "temperature": 14.4,
//         "timestamp": "2023-12-04T19:00:24.343-07:00"
//     },
//     {...},
//     {...}
//   ],
// }
const getStatisticData = (locationId, startDate, endDate) => {
    return fetch(`http://localhost:8080/api/data?location=${locationId}&startDate=${startDate.getTime()}&endDate=${endDate.getTime()}`)
        .then((response) => response.json());
}


export {getRoomsList, getAverage, getStatisticData};