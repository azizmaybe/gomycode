document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input')?.value;
    const apiKey = '6ef06acaa1c41bf8cce45a43ad14903e';
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`

    fetch(weatherURL)
         .then(response => response.json())
         .then(data => {
            console.log(data)
            if (data.cod === 200) {
                const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} </p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                `
                document.getElementById('weather').innerHTML = weatherInfo;
                document.getElementById('weather').style.display="block";
            } else {
                document.getElementById('weather').innerHTML = '<p>${data.message}</p>';
            }
         })
         .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weather').innerHTML = '<p>Unable to get weather data. Please try again later. </p>';
         });
});