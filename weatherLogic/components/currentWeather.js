export function renderCurrentWeather(container, data, onFavorite) {
  container.innerHTML = `
    <div class="card">
      <h3>${data.name}</h3>
      <p> Temperature: ${data.main.temp} °C</p>
      <p> Humidity: ${data.main.humidity}%</p>
      <p> Wind Speed: ${data.wind.speed} m/s</p>
      <button id="fav-btn">Add to Favorites</button>
    </div>
  `;

  document.getElementById("fav-btn").onclick = onFavorite;
}
