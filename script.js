const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");

const errorMessage = document.getElementById("errorMessage");
const loader = document.getElementById("loader");

const OpenWeatherMap_API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function fetchWeather(city) {
  const url = `${BASE_URL}?q=${city}&appid=${OpenWeatherMap_API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      cityName.textContent = data.name;

      temperature.textContent = `${Math.round(data.main.temp)}°C`;

      condition.textContent = data.weather[0].main;

      humidity.textContent = `Humidity: ${data.main.humidity}%`;

      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weatherIcon.alt = data.weather[0].description;
    }
    
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }

  
}

fetchWeather("London");
