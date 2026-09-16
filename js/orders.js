const ordersList = document.querySelector("#ordersList");
const orders = JSON.parse(localStorage.getItem("foodieOrders") || "[]");

if (!orders.length) {
  ordersList.innerHTML = `<p class="empty-cart order-card">No orders yet. <a href="resturant.html">Order from a hotel</a>.</p>`;
} else {
  ordersList.innerHTML = orders.map((order) => `
    <article class="order-card">
      <p class="eyebrow">Order #${order.id}</p>
      <h3>Rs. ${order.total} - ${order.status}</h3>
      <p>${order.date}</p>
      <ul>
        ${order.items.map((item) => `<li>${item.quantity} x ${item.name} from ${item.hotelName}</li>`).join("")}
      </ul>
      <p>Deliver to: ${order.address}</p>
    </article>
  `).join("");
}
