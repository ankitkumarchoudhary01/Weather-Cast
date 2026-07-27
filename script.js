const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");

const errorMessage = document.getElementById("errorMessage");
const loader = document.getElementById("loader");

init();

const OpenWeatherMap_API_KEY = "YOUR_API_KEY";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function fetchWeather(city) {
  const cachedData = getCache(city);

  if (cachedData) {
    renderWeather(cachedData);
    return;
  }

  const url = `${BASE_URL}?q=${city}&appid=${OpenWeatherMap_API_KEY}&units=metric`;

  showLoader();

  errorMessage.textContent = "";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("city not found");
    }
    const data = await response.json();

    renderWeather(data);
  } catch (error) {
    weatherInfo.classList.add("hidden");

    if (error.message === "city not found") {
      errorMessage.textContent = "City not found.";
    } else {
      errorMessage.textContent = "Something went wrong.";
    }
  } finally {
    hideLoader();
  }
}

searchBtn.addEventListener("click", searchWeather);

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchWeather();
  }
});

function searchWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    errorMessage.textContent = "Please enter a city name.";

    return;
  }

  fetchWeather(city);
}

function init() {
  getCurrentLocation();
}

function showLoader() {
  loader.classList.remove("hidden");

  searchBtn.disabled = true;
}
function hideLoader() {
  loader.classList.add("hidden");

  searchBtn.disabled = false;
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    handleLocationSuccess,
    handleLocationError,
  );
}

async function handleLocationSuccess(position) {
  const { latitude, longitude } = position.coords;

  const url = `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${OpenWeatherMap_API_KEY}&units=metric`;

  showLoader();

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Unable to fetch location weather");
    }

    const data = await response.json();

    renderWeather(data);
  } catch (error) {
    errorMessage.textContent = "Unable to get weather for your location.";
  } finally {
    hideLoader();
  }
}

function renderWeather(data) {
  weatherInfo.classList.remove("hidden");

  cityName.textContent = data.name;

  temperature.textContent = `${Math.round(data.main.temp)}°C`;

  condition.textContent = data.weather[0].main;

  humidity.textContent = `Humidity: ${data.main.humidity}%`;

  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  weatherIcon.alt = data.weather[0].description;

  updateBackground(data.weather[0].main);
}

function handleLocationError() {
  fetchWeather("London");
}

function saveCache(city, data) {
  const cache = {
    weather: data,

    timestamp: Date.now(),
  };

  localStorage.setItem(city.toLowerCase(), JSON.stringify(cache));
}

function getCache(city) {
  const cache = JSON.parse(localStorage.getItem(city.toLowerCase()));

  if (!cache) return null;

  const TEN_MINUTES = 10 * 60 * 1000;

  if (Date.now() - cache.timestamp < TEN_MINUTES) {
    return cache.weather;
  }

  localStorage.removeItem(city.toLowerCase());

  return null;
}


function updateBackground(condition) {

  document.body.className = "";

  switch (condition) {

    case "Clear":
      document.body.classList.add("sunny");
      break;

    case "Clouds":
      document.body.classList.add("cloudy");
      break;

    case "Rain":
    case "Drizzle":
      document.body.classList.add("rain");
      break;

    case "Snow":
      document.body.classList.add("snow");
      break;

    case "Thunderstorm":
      document.body.classList.add("thunder");
      break;

    default:
      document.body.classList.add("sunny");

  }

}