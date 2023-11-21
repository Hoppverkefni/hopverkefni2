fetch("https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products")
  .then((response) => response.json())
  .then((data) => {
    const gridContainer = document.getElementById("grid-container");

    // Assuming 'data' itself is the array of products.
    // If the structure is different, adjust the code to match the API's response structure.
    const items = Array.isArray(data) ? data : data.items || [];

    // Clear the grid container before adding new items
    gridContainer.innerHTML = "";

    // Iterate over 'items' to create product elements
    items.forEach((item) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Create the HTML for each product, making the image and title clickable links
      gridItem.innerHTML = `
      <a href="vorur.html?id=${item.id}">
        <img src="${item.image}" alt="${item.title}" />
        <h3>${item.title}</h3>
      </a>
      <p>Price: ${item.price} kr-</p>
      <p>Category: ${item.category_title}</p>
    `;

      // Append the new grid item to the container
      gridContainer.appendChild(gridItem);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Search function
function searchProducts() {
  const searchInput = document.getElementById("search-input");
  fetchProducts(searchInput.value);
}

// Event listener for the search button
document
  .getElementById("search-button")
  .addEventListener("click", searchProducts);

// Optional: Trigger search when the user presses "Enter" in the search field
document
  .getElementById("search-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchProducts();
    }
  });

// Fetch all products initially
fetchProducts();
