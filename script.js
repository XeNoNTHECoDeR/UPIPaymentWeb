let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add an item to cart
function addToCart(product, price, imageUrl) {
  cart.push({ product, price, imageUrl });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product + " added to cart!");
}

// Display cart on cart.html
function loadCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const totalText = document.getElementById('total');
  cartItemsDiv.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.product}" width="80">
      <p>${item.product} - ₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });

  totalText.textContent = "Total: ₹" + total;
}

// 🗑 Remove a specific item by index
function removeFromCart(index) {
  cart.splice(index, 1); // remove 1 item at given index
  localStorage.setItem('cart', JSON.stringify(cart)); // update storage
  loadCart(); // refresh cart
}

// Load cart on page load (cart.html only)
if (window.location.pathname.includes("cart.html")) {
  window.onload = loadCart;
}
