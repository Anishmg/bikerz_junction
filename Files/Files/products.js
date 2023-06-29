function filterProducts() {
  // Declare variables
  var input, filter, productImages, productName, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  productImages = document.getElementsByClassName('product-image');

  // Loop through all product images, and hide those who don't match the search query
  for (i = 0; i < productImages.length; i++) {
    productName = productImages[i].getElementsByClassName('product-name')[0];
    txtValue = productName.textContent || productName.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      productImages[i].style.display = "";
    } else {
      productImages[i].style.display = "none";
    }
  }
}
