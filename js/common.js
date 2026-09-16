const hotels = [
  {
    id: "qissa-spice-house",
    name: "Qissa Spice House",
    cuisine: "Modern Indian",
    rating: "4.8",
    time: "30-40 min",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
    story: "Smoky grills, slow curries, biryani, and fresh breads inspired by India's regional kitchens.",
    tags: ["Tandoor", "Curries", "Biryani"],
    menuHero: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1600&q=80",
    menu: [
      {
        category: "Starters",
        items: [
          { name: "Chilli Paneer", desc: "Golden paneer tossed with peppers, garlic, and spring onion.", price: 180, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80" },
          { name: "Pepper Fish", desc: "Crisp fish bites with red chilli, curry leaves, and lime.", price: 240, image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=700&q=80" }
        ]
      },
      {
        category: "Mains",
        items: [
          { name: "Butter Chicken", desc: "Grilled chicken simmered in tomato, butter, cream, and fenugreek.", price: 320, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80" },
          { name: "Lamb Rogan Josh", desc: "Slow cooked lamb in a deep Kashmiri-style masala.", price: 390, image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=700&q=80" }
        ]
      },
      {
        category: "Rice & Bread",
        items: [
          { name: "Hyderabad Biryani", desc: "Fragrant basmati layered with spiced meat and saffron.", price: 360, image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=700&q=80" },
          { name: "Garlic Naan", desc: "Clay-oven bread brushed with garlic butter.", price: 80, image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=700&q=80" }
        ]
      }
    ]
  },
  {
    id: "blossom-bistro",
    name: "Blossom Bistro",
    cuisine: "Continental",
    rating: "4.6",
    time: "25-35 min",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    story: "A cozy kitchen for pastas, crisp salads, baked mains, and cafe-style desserts.",
    tags: ["Pasta", "Salads", "Desserts"],
    menuHero: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80",
    menu: [
      {
        category: "Small Plates",
        items: [
          { name: "Bruschetta Board", desc: "Tomato, basil, garlic, and olive oil on toasted sourdough.", price: 170, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=700&q=80" },
          { name: "Crispy Mushroom Bites", desc: "Herbed mushrooms with lemon aioli.", price: 190, image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=700&q=80" }
        ]
      },
      {
        category: "Pasta",
        items: [
          { name: "Penne Arrabbiata", desc: "Tomato, chilli, garlic, parsley, and parmesan.", price: 280, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=700&q=80" },
          { name: "Creamy Alfredo", desc: "Silky parmesan cream sauce with grilled vegetables.", price: 300, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80" }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Tiramisu Cup", desc: "Coffee-soaked sponge, mascarpone, and cocoa.", price: 190, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80" },
          { name: "Chocolate Tart", desc: "Dark chocolate ganache with sea salt.", price: 210, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80" }
        ]
      }
    ]
  },
  {
    id: "urban-wok",
    name: "Urban Wok",
    cuisine: "Asian Fusion",
    rating: "4.7",
    time: "20-30 min",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    story: "Fast wok-fired bowls, dim sum, ramen, and bright sauces with a city-night energy.",
    tags: ["Noodles", "Dim Sum", "Bowls"],
    menuHero: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1600&q=80",
    menu: [
      {
        category: "Dim Sum",
        items: [
          { name: "Veg Momos", desc: "Steamed parcels with spicy sesame dip.", price: 160, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=700&q=80" },
          { name: "Chicken Gyoza", desc: "Pan-seared dumplings with ginger soy.", price: 220, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80" }
        ]
      },
      {
        category: "Bowls",
        items: [
          { name: "Teriyaki Rice Bowl", desc: "Glazed chicken, sticky rice, greens, and sesame.", price: 310, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80" },
          { name: "Korean Chilli Noodles", desc: "Wok noodles with gochujang, peppers, and scallions.", price: 280, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80" }
        ]
      },
      {
        category: "Sushi",
        items: [
          { name: "Avocado Maki", desc: "Clean, creamy rolls with wasabi and pickled ginger.", price: 260, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80" },
          { name: "Spicy Tuna Roll", desc: "Tuna, chilli mayo, cucumber, and toasted sesame.", price: 380, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=700&q=80" }
        ]
      }
    ]
  }
];

function getCart() {
  return JSON.parse(localStorage.getItem("foodieCart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("foodieCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function cartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function selectedHotel() {
  const id = new URLSearchParams(window.location.search).get("id") || hotels[0].id;
  return hotels.find((hotel) => hotel.id === id) || hotels[0];
}

function addDishToCart(hotel, dish) {
  const cart = getCart();
  const key = `${hotel.id}-${dish.name}`;
  const existing = cart.find((item) => item.key === key);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ key, hotelId: hotel.id, hotelName: hotel.name, ...dish, quantity: 1 });
  }

  saveCart(cart);
}

function hotelCard(hotel) {
  return `
    <a class="hotel-card" href="menu.html?id=${hotel.id}">
      <img src="${hotel.image}" alt="${hotel.name}">
      <div class="card-body">
        <div class="card-meta">
          <span>${hotel.cuisine}</span>
          <span><i class="fa-solid fa-star"></i> ${hotel.rating} - ${hotel.time}</span>
        </div>
        <h3>${hotel.name}</h3>
        <p>${hotel.story}</p>
        <div class="tag-row">
          ${hotel.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
