// Function to fetch and display product details
function fetchProductDetails(productId) {
  fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
      const detailSection = document.getElementById("product-detail");
      detailSection.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="width:100%;">
        <h3>${product.title}</h3>
        <p>Price: ${product.price} kr-</p>
        <p>Category: ${product.category_title}</p>
        <p>${product.description}</p>
      `;

      // Assuming 'product.category_title' is the correct category identifier
      console.log('Product category:', product.category_title);
      fetchSimilarProducts(product.category_title);
    })
    .catch(error => console.error("Error:", error));
}

// Function to fetch and display similar products
function fetchSimilarProducts(category) {
  console.log(`Fetching similar products with category: ${category}`);
  
  fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=3&category=${category}`)
    .then(response => response.json())
    .then(similarProducts => {
      console.log('Similar products:', similarProducts);

      // Access the 'items' array from the response object
      const productsArray = similarProducts.items;

      if (Array.isArray(productsArray)) {
        const similarSection = document.getElementById("similar-products-grid");
        similarSection.innerHTML = "";

        productsArray.forEach(product => {
          similarSection.innerHTML += `
            <div>
              <img src="${product.image}" alt="${product.title}">
              <h4>${product.title}</h4>
              <p>${product.price} kr-</p> <!-- Display price if you want -->
            </div>
          `;
        });
      } else {
        // Handle the case where 'items' is not an array
        console.error('Expected an array of items, but received:', productsArray);
      }
    })
    .catch(error => console.error("Error:", error));
}

// Extract the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Call the function to fetch product details
if (productId) {
fetchProductDetails(productId);
} else {
console.error("Product ID not found in the URL");
}
