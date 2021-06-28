import axios from 'axios';

const API_KEY = 'ed39889f2eb5e8cef466fa4b5de0a4ce';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=${API_KEY}`

export const fweather = () => {
    return axios.get(`${URL}`)
    .then((res) => {
        console.log(res.data.weather[0].description)
        return res.data
    })
    .catch((err) => {
        console.error(err)
    })
}