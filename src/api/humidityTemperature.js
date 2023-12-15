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
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => resolve([{id: 1, name:'r1'}, {id: 2, name: 'r2'}, {id: 3, name: 'living room'}]), 300);
        });
}

// GET "api/average?location_id=location_id&start_date=start_date&end_date=end_date"
// Респонс:
// {
//   temperature: number,
//   humidity: number
// }
const getAverage = (locationId, startDate, endDate) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => resolve({
                temperature: 8,
                humidity: 25
            }), 1000);
        }
    )
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

    return new Promise(resolve => {
        setTimeout(() => resolve(
            {
                sensor_id: 2,
                location: "r2",
                data: [
                    {timestamp: new Date('2023-01-02'), temperature: 13.1, humidity: 23.1},
                    {timestamp: new Date('2023-01-03'), temperature: 15.0, humidity: 35.0},
                    {timestamp: new Date('2023-01-04'), temperature: 14.5, humidity: 24.5},
                    {timestamp: new Date('2023-01-05'), temperature: 16.1, humidity: 56.1},
                    {timestamp: new Date('2023-01-06'), temperature: 15.3, humidity: 45.3},
                    {timestamp: new Date('2023-01-07'), temperature: 18.3, humidity: 38.3},
                    {timestamp: new Date('2023-01-08'), temperature: 15.1, humidity: 25.1},
                ]
            }
        ), 300)
    })
}



export {getRoomsList, getAverage, getStatisticData};