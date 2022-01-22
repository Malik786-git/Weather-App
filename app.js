// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// key: dd95ddb0ca9df88c759b05bf21e5210e
const search = document.getElementById('search');
const btn = document.getElementById('btn')
const weatherApi = {
    key: 'dd95ddb0ca9df88c759b05bf21e5210e',
    baseUrl:'https://api.openweathermap.org/data/2.5/weather'
}
function apifun() {

     fetch(`${weatherApi.baseUrl}?q=${search.value}&appid=${weatherApi.key}`)
     .then(res =>res.json())
     .then(UpdateUi)
    
}


btn.onclick = ()=>{

    if(search.value !== ''){
        apifun();
    }else
    {
        alert("write something!")
    }
}

function UpdateUi(data) {
     document.getElementById('container').innerHTML = `
     <h1>🙔 Weather</h1>
     <i class="fa fa-cloud icon" aria-hidden="true"></i>
     <small id="main">${data.weather[0].main}</small>
     <div class="temp_details">
         <small>Min ${Math.floor(data.main.temp_max-273)}&#186;C</small>
         <h2>${Math.floor(data.main.temp-273)}&#186;C</h2>
         <small>Min ${Math.floor(data.main.temp_min-273)}&#186;C</small>
     </div>
         <h2>${data.name}, ${data.sys.country}</h2>`;
}
