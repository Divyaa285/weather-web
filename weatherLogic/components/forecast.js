export function renderForecast(container, forecastList) {
  // Pick one forecast per day (5 days)
  const dailyForecast = forecastList.filter((_, index) => index % 8 === 0);

  container.innerHTML = `
    <h2 class="forecast-heading">5-Day Weather Forecast</h2>
    <div class="forecast-grid">
      ${dailyForecast.map(day => `
        <div class="card forecast-card">
          <p class="forecast-date">
            ${new Date(day.dt_txt).toDateString()}
          </p>
          <p class="temp-red">
             ${day.main.temp} °C
          </p>
          <p>
             ${day.weather[0].description}
          </p>
        </div>
      `).join("")}
    </div>
  `;
}

