const weather = document.querySelector(".js-weather");
const API_KEY = "1561cc446296f421f5cfebbabe9c54b2";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        const nation = json.sys.country;
        const desc = json.weather[0].main;
        weather.innerHTML = `@ ${place}(${nation})
                            <h2>${desc}</h2>
                            <h3>${temperature}˚C</h3>`;
        console.log(json);
    });
}


function saveCoords(coordsObj) { 
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,// latitude: latitude,
        longitude// longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);

}

function handleGeoError() {
    console.log("Can't access geo location.")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        //get weather...
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init() {
    loadCoords();

}

init();