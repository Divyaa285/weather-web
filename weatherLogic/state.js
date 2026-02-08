export const state = {
  city: "",
  currentWeather: null,
  forecast: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || []
};

export function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(state.favorites));
}

