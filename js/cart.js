const cartList = document.querySelector("#cartList");
const cartTotalNode = document.querySelector("#cartTotal");

function changeQuantity(key, amount) {
  const updated = getCart()
    .map((item) => item.key === key ? { ...item, quantity: item.quantity + amount } : item)
    .filter((item) => item.quantity > 0);

  saveCart(updated);
  renderCart();
}

function renderCart() {
  const cart = getCart();
  cartTotalNode.textContent = `Rs. ${cartTotal()}`;

  if (!cart.length) {
    cartList.innerHTML = `<p class="empty-cart">Your cart is empty. <a href="resturant.html">Explore hotels</a>.</p>`;
    return;
  }

  cartList.innerHTML = cart.map((item) => `
    <article class="cart-row">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <p class="eyebrow">${item.hotelName}</p>
        <h3>${item.name}</h3>
        <p class="empty-cart">Rs. ${item.price} each</p>
        <div class="qty-controls">
          <button type="button" data-key="${item.key}" data-action="minus">-</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-key="${item.key}" data-action="plus">+</button>
        </div>
      </div>
      <strong>Rs. ${item.price * item.quantity}</strong>
    </article>
  `).join("");

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      changeQuantity(button.dataset.key, button.dataset.action === "plus" ? 1 : -1);
    });
  });
}

renderCart();
