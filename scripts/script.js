// Fetch the initial 6 products to display on the main page
fetch("https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=6")
  .then((response) => response.json())
  .then((data) => {
    const gridContainer = document.getElementById("grid-container");
    const items = Array.isArray(data) ? data : data.items || [];

    items.forEach((item) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Create an anchor tag to link to the product detail page
      const productLink = document.createElement("a");
      // Assuming 'item.id' is the correct property for the product identifier
      productLink.href = `/sidur/vorur.html?id=${item.id}`; // Update the path to your product detail page if needed
      productLink.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>Price: ${item.price} kr-</p>
        <p>Category: ${item.category_title}</p>
      `;

      // Append the anchor tag to the grid item, and then to the grid container
      gridItem.appendChild(productLink);
      gridContainer.appendChild(gridItem);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
