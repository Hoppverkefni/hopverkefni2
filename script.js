fetch("https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=6")
  .then((response) => response.json())
  .then((data) => {
    const gridContainer = document.getElementById("grid-container");

    data.items.forEach((item) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Assuming 'item' has properties like 'title', 'image', 'price', 'category'
      gridItem.innerHTML = `
        <h3>${item.title}</h3>
        <img src="${item.image}" alt="${item.title}" style="width:100%; height:auto;">
        <p>Price: ${item.price}</p>
        <p>Category: ${item.category}</p>
      `;

      gridContainer.appendChild(gridItem);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
