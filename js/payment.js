const paymentItems = document.querySelector("#paymentItems");
const paymentTotal = document.querySelector("#paymentTotal");
const paymentForm = document.querySelector("#paymentForm");

function renderPayment() {
  const cart = getCart();
  paymentTotal.textContent = `Rs. ${cartTotal()}`;

  if (!cart.length) {
    paymentItems.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
    paymentForm.querySelector("button").disabled = true;
    return;
  }

  paymentItems.innerHTML = cart.map((item) => `
    <div class="cart-line">
      <span>${item.quantity} x ${item.name}</span>
      <strong>Rs. ${item.price * item.quantity}</strong>
    </div>
  `).join("");
}

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cart = getCart();
  if (!cart.length) return;

  const data = new FormData(paymentForm);
  const orders = JSON.parse(localStorage.getItem("foodieOrders") || "[]");

  orders.unshift({
    id: Date.now(),
    date: new Date().toLocaleString(),
    status: "Order Placed",
    address: data.get("address"),
    total: cartTotal(),
    items: cart
  });

  localStorage.setItem("foodieOrders", JSON.stringify(orders));
  saveCart([]);
  window.location.href = "orders.html";
});

renderPayment();
