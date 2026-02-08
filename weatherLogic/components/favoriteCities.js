export function renderFavorites(container, favorites, onSelect, onDelete) {
  if (!favorites || favorites.length === 0) {
    container.innerHTML = "<p>No favorite cities added.</p>";
    return;
  }

  container.innerHTML = favorites.map(city => `
    <div class="favorite-item">
      
      <span class="favorite-city">${city}</span>
      <button class="delete-btn">❌</button>
    </div>
  `).join("");

 
  container.querySelectorAll(".favorite-city").forEach((el, index) => {
    el.onclick = () => onSelect(favorites[index]);
  });

  // DELETE CITY
  container.querySelectorAll(".delete-btn").forEach((btn, index) => {
    btn.onclick = () => onDelete(index);
  });
}
