const API_KEY = "9bb2b9dbcf79e6f0a9d9291d48ea6444";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}

export async function fetchForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Forecast not available");
  }

  return response.json();
}
