const API_KEY = '00b908352099ba90a12ecbd4a449112b'

fetch("https://api.openweathermap.org/data/2.5/weather?q=brooklyn&units=imperial&appid=00b908352099ba90a12ecbd4a449112b")
.then((data) => data.json())

.then((jsonData) => {

    // console.log(jsonData);
    fetch(`http://openweathermap.org/img/w/${jsonData.weather[0].icon}.png`)
    .then((res) => res.blob())
    .then((result) => {
        document.getElementById("text_location").innerHTML = jsonData.name
        document.getElementById("text_location_country").innerHTML = jsonData.sys.country
    
        document.getElementById("text_temp").innerHTML = Math.round(jsonData.main.temp)
        document.getElementById("text_feelslike").innerHTML = Math.round(jsonData.main.feels_like)
        document.getElementById("text_desc").innerHTML = jsonData.weather[0].description

        const imageObjectURL = URL.createObjectURL(result)
        document.getElementById("icon").src = imageObjectURL
    })

})