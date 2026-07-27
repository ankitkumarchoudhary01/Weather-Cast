# Weather Cast

## Overview

Weather Cast is a responsive weather application built using HTML, CSS, and Vanilla JavaScript. It retrieves real-time weather information from the OpenWeatherMap API and displays current weather conditions for any searched city. The application demonstrates modern JavaScript concepts, including asynchronous programming with `async/await`, API integration using the Fetch API, browser Geolocation API, LocalStorage caching, and dynamic user interface updates.

This project was developed as part of Sprint 03 at Prodesk IT to demonstrate proficiency in working with external APIs, handling asynchronous operations, managing application state, and implementing production-ready frontend features.

---

## Features

### Phase 1 – Base MVP

* Fetches live weather data from the OpenWeatherMap API
* Uses the Fetch API with `async/await`
* Displays:

  * City Name
  * Current Temperature
  * Weather Condition
  * Humidity
  * Weather Icon

### Phase 2 – Dynamic Search and Error Handling

* Search weather by city name
* Search using the Enter key
* Loading indicator during API requests
* User-friendly error handling
* Invalid city validation
* Empty input validation
* Responsive UI updates without page refresh

### Phase 3 – Advanced Features

* Automatic weather detection using the browser Geolocation API
* LocalStorage caching to reduce unnecessary API requests
* Cache expiration after 10 minutes
* Dynamic background themes based on weather conditions
* Smooth CSS transitions between themes

---

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* Fetch API
* Async/Await
* OpenWeatherMap API
* Geolocation API
* LocalStorage

---

## Project Structure

```text
weather-cast/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project directory

```bash
cd weather-cast
```

### Open the project

Open `index.html` in your preferred browser.

Alternatively, use the Live Server extension in Visual Studio Code for local development.

---

## API Configuration

This project uses the OpenWeatherMap API.

1. Create a free account on OpenWeatherMap.
2. Generate an API key.
3. Replace the placeholder API key in `script.js`.

```javascript
const OpenWeatherMap_API_KEY = "YOUR_API_KEY";
```

---

## Application Workflow

1. The application requests the user's location using the Geolocation API.
2. If permission is granted, weather data for the current location is displayed.
3. If permission is denied, the application falls back to a default city.
4. Users can search for any city using the search input.
5. Before making an API request, the application checks LocalStorage for cached data.
6. If cached data is less than 10 minutes old, it is displayed instead of making another network request.
7. If no valid cache exists, fresh data is retrieved from the API.
8. The application updates the interface and adjusts the background theme according to the weather condition.

---

## Error Handling

The application handles several error scenarios gracefully, including:

* Empty search input
* Invalid city names
* Network failures
* API request failures
* Geolocation permission denial

Meaningful error messages are displayed without breaking the user interface.

---

## Responsive Design

The application is fully responsive and has been designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

## Accessibility

The project includes accessibility considerations such as:

* Semantic HTML structure
* Accessible form labels
* Alternative text for weather icons
* Keyboard navigation support
* Live region for dynamic error messages

---

## Learning Objectives

This project demonstrates understanding of:

* Asynchronous JavaScript
* REST API integration
* Fetch API
* JSON parsing
* DOM manipulation
* Event handling
* Browser Geolocation API
* LocalStorage
* Error handling with `try...catch`
* Responsive web design
* Modern JavaScript best practices

---

## Future Improvements

Potential enhancements include:

* Five-day weather forecast
* Recent search history
* Temperature unit conversion
* Air quality information
* Sunrise and sunset details
* Weather alerts
* Theme customisation
* Dark mode support

---

## Author

Developed as part of the Prodesk IT Sprint 03 assignment using HTML, CSS, and Vanilla JavaScript.

---

## License

This project is intended for educational and learning purposes.
