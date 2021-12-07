
const appid = "002f1a3ea9d9c55c7e12c50e496546a0";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in " + lat , lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
    });
    console.log(url);
}

function onGeoError(){
    alert("Cannot find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);