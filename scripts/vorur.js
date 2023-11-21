// Function to fetch and display product details
function fetchProductDetails(productId) {
    fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/${productId}`)
      .then(response => response.json())
      .then(product => {
        const detailSection = document.getElementById("product-detail");
        detailSection.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>Price: ${product.price} kr-</p>
          <p>Category: ${product.category_title}</p>
          <p>${product.description}</p>
        `;
  
        // Fetch similar products
        fetchSimilarProducts(product.category);
      })
      .catch(error => console.error("Error:", error));
  }
  
  // Function to fetch and display similar products
  function fetchSimilarProducts(category) {
    fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=3&category=${category}`)
      .then(response => response.json())
      .then(similarProducts => {
        const similarSection = document.getElementById("similar-products-grid");
        similarSection.innerHTML = "";
  
        similarProducts.forEach(product => {
          similarSection.innerHTML += `
            <div>
              <img src="${product.image}" alt="${product.title}">
              <h4>${product.title}</h4>
            </div>
          `;
        });
      })
      .catch(error => console.error("Error:", error));
  }
  
  // Extract the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  
  // Call the function to fetch product details
  fetchProductDetails(productId);
  