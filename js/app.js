const API_KEY = `a4a39bff2b73f0b008c4c64654fafd83`;
const searchTemp =() =>{
    const cityName = document.getElementById('city-name');
    const city = cityName.value;
    cityName.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url).
    then(res => res.json()).
    then(data => displayTemprature(data))
}

const setInner = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemprature = temprature => {
    // console.log(temprature);
    setInner('city', temprature.name);
    setInner('temp', temprature.main.temp);
    setInner('condtion', temprature.weather[0].main);
    // set icon
    const iconUrl = `https://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png`
    document.getElementById('icon').setAttribute('src', iconUrl)
}