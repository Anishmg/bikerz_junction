// Get the search form and product list elements
const searchForm = document.querySelector('.search-form');
const productList = document.querySelector('.product-list');

// Add a submit event listener to the search form
searchForm.addEventListener('submit', e => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the search query from the input field
  const searchQuery = searchForm.querySelector('input').value.toLowerCase();

  // Get all the product items in the product list
  const productItems = productList.querySelectorAll('.product-item');

  // Loop through each product item and check if it matches the search query
  productItems.forEach(item => {
    const title = item.querySelector('.product-title').textContent.toLowerCase();
    const description = item.querySelector('.product-description').textContent.toLowerCase();

    if (title.includes(searchQuery) || description.includes(searchQuery)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

