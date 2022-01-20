// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// key: dd95ddb0ca9df88c759b05bf21e5210e
const weatherApi = {
    key: 'dd95ddb0ca9df88c759b05bf21e5210e',
    baseUrl:'https://api.openweathermap.org/data/2.5/weather'
}
function apifun() {
    
    // let url = `${weatherApi.baseUrl}?q=Mumbai&appid=${weatherApi.key}`;
 
    fetch(`${weatherApi.baseUrl}?q=karachi&appid=${weatherApi.key}`)
    .then(res =>res.json())
    .then(UpdateUi)
}
apifun();

function UpdateUi(data) {
    console.log(Math.floor( data.main.temp-273.15));
}
