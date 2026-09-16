const hotelGrid = document.querySelector("#hotelGrid");
const signatureGrid = document.querySelector("#signatureGrid");
const homeHeader = document.querySelector("#homeHeader");

function updateHomeHeader() {
  homeHeader.classList.toggle("scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHomeHeader, { passive: true });
updateHomeHeader();

hotelGrid.innerHTML = hotels.map(hotelCard).join("");

const signatures = hotels.flatMap((hotel) => {
  return hotel.menu.flatMap((group) => {
    return group.items.map((dish) => ({
      ...dish,
      hotel: hotel.name,
      rating: hotel.rating,
      hotelId: hotel.id
    }));
  }).slice(0, 2);
});

signatureGrid.innerHTML = signatures.map((dish) => `
  <a class="signature-card trending-card" href="menu.html?id=${dish.hotelId}" aria-label="View ${dish.name} from ${dish.hotel}">
    <div class="trending-image-wrap">
      <img src="${dish.image}" alt="${dish.name}">
    </div>
    <div class="trending-panel">
      <p class="trending-hotel">${dish.hotel}</p>
      <h3>${dish.name}</h3>
      <div class="trending-extra">
        <span>Rs. ${dish.price}</span>
        <span><i class="fa-solid fa-star"></i> ${dish.rating}</span>
      </div>
      <p class="trending-desc">${dish.desc}</p>
    </div>
  </a>
`).join("");
