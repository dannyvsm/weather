const fetch = require('node-fetch');
const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=${APPID}`


const getWeather = async() => {
    let data = await fetch(url);
    console.log(await data.json());
}

getWeather();