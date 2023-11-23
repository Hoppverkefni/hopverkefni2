function fetchProducts(searchQuery) {
  let url = "https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products";
  if (searchQuery) {
    url += `?search=${encodeURIComponent(searchQuery)}`;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const gridContainer = document.getElementById("grid-container");
      gridContainer.innerHTML = ""; // Clear existing products

      // Assuming 'data.items' is the array of products if 'data' is not the array itself
      const items = Array.isArray(data) ? data : data.items || [];

      if (items.length === 0) {
        // Display a message if no products are found
        gridContainer.innerHTML = `<p>No products found.</p>`;
        return;
      }

      // Create and append product elements to the grid
      items.forEach((item) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.innerHTML = `
          <a href="vorur.html?id=${item.id}">
            <img src="${item.image}" alt="${item.title}" />
            <h3>${item.title}</h3>
          </a>
          <p>Price: ${item.price} kr-</p>
          <p>Category: ${item.category_title}</p>
        `;
        gridContainer.appendChild(gridItem);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Search function
function searchProducts() {
  const searchInput = document.getElementById("search-input");
  fetchProducts(searchInput.value);
}

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", searchProducts);

// Optional: Trigger search when the user presses "Enter" in the search field
document.getElementById("search-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchProducts();
  }
});

// Fetch all products initially
fetchProducts(''); // Pass an empty string to fetch all products
