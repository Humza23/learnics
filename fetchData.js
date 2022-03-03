const API_KEY = '00b908352099ba90a12ecbd4a449112b'

fetch("https://api.openweathermap.org/data/2.5/weather?q=brooklyn&appid=00b908352099ba90a12ecbd4a449112b")
.then((data) => data.json())
.then((jsonData) => {
    console.log(jsonData);
})