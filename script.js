fetch("https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=6")
  .then((response) => response.json())
  .then((data) => {
    const gridContainer = document.getElementById("grid-container");

    // Check if 'data' itself is an array or if it has an 'items' property that is an array
    const items = Array.isArray(data) ? data : (data.items || []);

    // Now iterate over 'items'
    items.forEach((item) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Adjust the property names according to your actual API response
      gridItem.innerHTML = `
        <h3>${item.title}</h3>
        <img src="${item.image}" alt="${item.title}">
        <p>Price: ${item.price}</p>
        <p>Category: ${item.category}</p>
      `;

      gridContainer.appendChild(gridItem);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });