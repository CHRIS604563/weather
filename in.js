let searEl = document.querySelector('.searc-el')
let weatherDiv = document.querySelector('.weatherDiv')
let h1City = document.querySelector('.cityName')
let noneDiv = document.querySelector('.noneDiv')
let mainDiv = document.querySelector('.main-el')
let temperatureDiv = document.querySelector('.temperatureEl')
let myApi = `e1458cd162654ee4f038ba1ea581f816`
let iconEl = document.querySelector('.weather-icon')
let thisTHin = "https://api.openweathermap.org/data/2.5/weather?q="


let detailsDiv = document.querySelector('.details')
let cardHumi =  document.getElementById('car-humi')
let cardWind =  document.getElementById('car-wind')
let cardFeel =  document.getElementById('car-feel')
let cardVisi =  document.getElementById('car-visi')


async function meFetc(){

    
    detailsDiv.style.display = 'flex'
const responseEl = await fetch(thisTHin + `${searEl.value}` + `&appid=${myApi}` )
const data = await responseEl.json()
let temperature = Number(data.main.temp) - 273.15
let celsius = Math.round(temperature)

mainDiv.innerHTML = data.weather[0].main
cardHumi.innerHTML = `💧 Humidity: ${data.main.humidity}%`
cardWind.innerHTML = `💨 Wind: ${data.wind.speed} km/h`
cardFeel.innerHTML = `🌡️ Feels like: ${celsius}°C`
cardVisi.innerHTML = `👁️ Visibility: ${data.visibility / 1000} km`

console.log(data)
h1City.innerHTML = data.name
temperatureDiv.innerHTML = celsius + `&deg;C`


    if(data.weather[0].main === 'Clouds'){
        iconEl.innerHTML = '☁️' 
    }
    else if(data.weather[0].main === 'Clear'){
        iconEl.innerHTML = '☀️' 
    }
    else if(data.weather[0].main === 'Rain'){
        iconEl.innerHTML = '🌧️'
    }
    else if(data.weather[0].main === 'Drizzle'){
        iconEl.innerHTML = '🌦️'
    }
    else if(data.weather[0].main === 'Mist'){
        iconEl.innerHTML = '🌫️'
    }

    else if(data.weather[0].main === 'Snow'){
        iconEl.innerHTML = '❄️'
    }

    else{
        iconEl.innerHTML = '🌈'
    }



    }

searEl.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        meFetc()
    }       


});