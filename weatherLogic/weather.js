import { state, saveFavorites } from "./state.js";
import { fetchWeather,fetchForecast } from "./weatherApi/api.js";
import { renderSearch } from "./components/searchComponent.js";
import { renderCurrentWeather } from "./components/currentWeather.js";
import { renderForecast } from "./components/forecast.js";
import { renderFavorites } from "./components/favoriteCities.js";

const errorEl = document.getElementById("error");

/* ---------- Screen Switching ---------- */
function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen =>
    screen.classList.remove("active")
  );
  document.getElementById(screenId).classList.add("active");

  const searchSection = document.getElementById("search-section");
  searchSection.style.display =
    screenId === "favorites" ? "none" : "block";
}

/* ---------- Sidebar Navigation ---------- */
document.querySelectorAll(".sidebar button").forEach(btn => {
  btn.onclick = () => switchScreen(btn.dataset.screen);
});

/* ---------- Search ---------- */
renderSearch(
  document.getElementById("search-section"),
  loadCity
);

/* ---------------- Load City ---------------- */
async function loadCity(city) {
  try {
    errorEl.textContent = "";
    state.city = city;

    const currentData = await fetchWeather(city);
    const forecastData = await fetchForecast(city);

    state.currentWeather = currentData;
    state.forecast = forecastData.list;

    renderCurrentWeather(
      document.getElementById("current-weather"),
      state.currentWeather,
      addFavorite
    );

    renderForecast(
      document.getElementById("forecast-container"),
      state.forecast
    );

    switchScreen("home");

  } catch (error) {
    errorEl.textContent = error.message;
  }
}



/* ---------------- Favorites ---------------- */
function addFavorite() {
  if (!state.city) return;

  if (!state.favorites.includes(state.city)) {
    state.favorites.push(state.city);
    saveFavorites();
    updateFavoritesUI();
  }
}



function deleteFavorite(index) {
  state.favorites.splice(index, 1);
  saveFavorites();
  updateFavoritesUI();
}

function updateFavoritesUI() {
  renderFavorites(
    document.getElementById("favorites-container"),
    state.favorites,
    loadCity,
    deleteFavorite
  );
}

/* ---------------- Initial Load ---------------- */
updateFavoritesUI();
switchScreen("home");