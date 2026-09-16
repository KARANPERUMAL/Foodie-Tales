const hotel = selectedHotel();
const menuHero = document.querySelector("#menuHero");
const categoryList = document.querySelector("#categoryList");
const menuItems = document.querySelector("#menuItems");
const cartItems = document.querySelector("#cartItems");
const cartTotalNode = document.querySelector("#cartTotal");
let activeCategory = hotel.menu[0].category;

document.title = `Foodie Tales | ${hotel.name}`;

function renderMenuHero() {
  menuHero.style.backgroundImage = `linear-gradient(90deg, rgba(20, 15, 18, 0.9), rgba(20, 15, 18, 0.42)), url("${hotel.menuHero}")`;
  menuHero.innerHTML = `
    <div class="menu-hero-content">
      <p class="eyebrow">${hotel.cuisine} - ${hotel.time}</p>
      <h2>${hotel.name}</h2>
      <p>${hotel.story}</p>
    </div>
  `;
}

function renderCategories() {
  categoryList.innerHTML = hotel.menu.map((group) => `
    <button class="category-pill ${group.category === activeCategory ? "active" : ""}" type="button" data-category="${group.category}">
      ${group.category}
    </button>
  `).join("");

  document.querySelectorAll(".category-pill").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderMenuItems();
    });
  });
}

function renderMenuItems() {
  const selectedGroup = hotel.menu.find((group) => group.category === activeCategory);

  menuItems.innerHTML = selectedGroup.items.map((dish) => `
    <article class="dish-card">
      <img src="${dish.image}" alt="${dish.name}">
      <div class="card-body">
        <div class="card-meta"><span>${activeCategory}</span></div>
        <h3>${dish.name}</h3>
        <p>${dish.desc}</p>
        <div class="price-line">
          <strong>Rs. ${dish.price}</strong>
          <button class="add-btn" type="button" data-dish-name="${dish.name}">Add</button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const dish = selectedGroup.items.find((item) => item.name === button.dataset.dishName);
      addDishToCart(hotel, dish);
      renderCartSummary();
      button.textContent = "Added";
      setTimeout(() => {
        button.textContent = "Add";
      }, 900);
    });
  });
}

function renderCartSummary() {
  const cart = getCart();
  const total = cartTotal();

  cartTotalNode.textContent = `Rs. ${total}`;

  if (!cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">No dishes added yet.</p>`;
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-line">
      <span>${item.quantity} x ${item.name}</span>
      <strong>Rs. ${item.price * item.quantity}</strong>
    </div>
  `).join("");
}

renderMenuHero();
renderCategories();
renderMenuItems();
renderCartSummary();
