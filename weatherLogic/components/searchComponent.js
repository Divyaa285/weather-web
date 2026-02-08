export function renderSearch(container, onSearch) {
  container.innerHTML = `
    <div class="search-box">
      <input
        type="text"
        id="city-input"
        placeholder="Enter city name..."
      />
      <button id="search-btn">Search</button>
    </div>
  `;

  const input = document.getElementById("city-input");
  const button = document.getElementById("search-btn");

  button.onclick = () => {
    const city = input.value.trim();
    if (!city) return;

    onSearch(city);

       input.value = "";
  };

  // OPTIONAL: Press Enter to search
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      button.click();
    }
  });
}
