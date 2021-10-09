let url = window.location.href;
let urlParams = new URL(url);
let id = parseInt(urlParams.searchParams.get("id"));
let cat = urlParams.searchParams.get("c");

let cart = document.querySelector(".showCart");

const data = [
  {
    image: "m1.jpg",
    price: "40 NOK",
    category: "m",
  },
  {
    image: "m2.jpg",
    price: "35 NOK",
    category: "m",
  },
  {
    image: "m3.jpg",
    price: "20 NOK",
    category: "m",
  },
  {
    image: "m4.jpg",
    price: "60 NOK",
    category: "m",
  },
  {
    image: "w1.jpg",
    price: "40 NOK",
    category: "w",
  },
  {
    image: "w2.jpg",
    price: "35 NOK",
    category: "w",
  },
  {
    image: "w3.jpg",
    price: "20 NOK",
    category: "w",
  },
  {
    image: "w4.jpg",
    price: "60 NOK",
    category: "w",
  },
];
if (id >= 1 && id <= 8 && (cat == "m" || cat !== "c")) {
  cart.innerHTML = "";
  data.map((v, i) => {
    if (id === i + 1) {
      document.querySelector("#price").value = v.price;

      cart.innerHTML = ` 
          <div class="card-image">
              
                  <img src="img/${v.image}" alt="${
        cat === "m" ? `Mens-Jacket-id${i}` : ` "Womens-Jacket-${i}`
      }">
  
                      </div>
          <div class="card-description">
              <a href="cart.html">
                  <h3>${v.price}</h3>
              </a>
              <p>
                  Lorem ipsum dolor sit </p>
          </div>
      `;
    }
  });
} else {
  location.href = "shop.html";
}
