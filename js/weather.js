const weather = document.querySelector(".js-weather");
const weatherIcon = document.createElement("img");

const COORDS_LS = 'coords';
const API_KEY = '1561cc446296f421f5cfebbabe9c54b2';

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        const icon = json.weather[0].icon;
        console.log(icon);
        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weather.innerText = `${temperature}°C @ ${place}`;
        weather.prepend(weatherIcon);
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}
function handleGeoError() {
    console.log("Can't access geo location.");
}
function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }

}

function init() {
    loadCoords();
}

init();