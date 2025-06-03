// product data
const products = [
    { id: 1, name: "Product 1", category: "electronics", price: 500, rating: 4, image: "prod3.jpeg" },
    { id: 2, name: "Product 2", category: "fashion", price: 700, rating: 3, image: "prod7.jpg" },
    { id: 3, name: "Product 3", category: "home", price: 900, rating: 5, image: "prod10.jpg" },
    { id: 4, name: "Product 4", category: "electronics", price: 300, rating: 4, image: "prod4.jpg" },
    { id: 5, name: "Product 5", category: "fashion", price: 1000, rating: 4, image: "prod8.jpg" }
];

// generate products
const productGrid = document.getElementById("product-grid");
let filteredProducts = products;

function generateProducts(products) {
    productGrid.innerHTML = "";
    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Rating: ${product.rating}</p>
            </div>
        `;
        productGrid.insertAdjacentHTML("beforeend", productHTML);
    });
}

generateProducts(products);

// filter functionality
const categoryFilter = document.getElementById("category-filter");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const applyFilterButton = document.getElementById("apply-filter");

applyFilterButton.addEventListener("click", () => {
    const category = categoryFilter.value;
    const minPrice = minPriceInput.value;
    const maxPrice = maxPriceInput.value;

    filteredProducts = products.filter(product => {
        if (category !== "all" && product.category !== category) return false;
        if (minPrice && product.price < minPrice) return false;
        if (maxPrice && product.price > maxPrice) return false;
        return true;
    });

    generateProducts(filteredProducts);
});

// sort functionality
const sortOptions = document.getElementById("sort-options");

sortOptions.addEventListener("change", () => {
    const sortValue = sortOptions.value;
    let sortedProducts = [...filteredProducts];

    switch (sortValue) {
        case "price-asc":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "rating-asc":
            sortedProducts.sort((a, b) => a.rating - b.rating);
            break;
        case "rating-desc":
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            break;
    }

    generateProducts(sortedProducts);
});