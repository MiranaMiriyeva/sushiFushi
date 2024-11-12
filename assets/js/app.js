let hamburgerBtn = document.querySelector(".hamburger");
let responsiveMenu = document.querySelector(".responsive_menu");
let responsiveLink = document.querySelectorAll(".responsive_link");

let isOpen = false;
console.log(hamburgerBtn);
hamburgerBtn.addEventListener("click", () => {
  if (!isOpen) {
    hamburgerBtn.classList.add("is-active");
    responsiveMenu.style.opacity = "1";
    responsiveMenu.style.visibility = "visible";
    isOpen = true;
  } else {
    hamburgerBtn.classList.remove("is-active");
    responsiveMenu.style.opacity = "0";
    responsiveMenu.style.visibility = "hidden";
    isOpen = false;
  }

  console.log("clicked");
});
responsiveLink.forEach((link) => {
  link.addEventListener("click", function () {
    hamburgerBtn.classList.remove("is-active");
    responsiveMenu.style.opacity = "0";
    responsiveMenu.style.visibility = "hidden";
    isOpen = false;
  });
});

// HERO SECTION
let container = document.querySelector(".her_section__container");
let sildeArr = [
  {
    heading: "The Freshest Taste of Japanese Cousine",
    img: "./assets/img/slide2.png",
  },
  {
    heading: "A True Taste Of Japanese Cousine",
    img: "./assets/img/slide1.png",
  },
  {
    heading: "We Bring Together The Freshest Taste",
    img: "./assets/img/slide3.png",
  },
];
let index = 1;
let elem = sildeArr[index];

function updateSlide() {
  container.classList.remove("slide-in");
  container.classList.add("slide-out");

  setTimeout(() => {
    elem = sildeArr[index];
    container.innerHTML = `
        <div class="hero_section__ls">
            <h2>${elem.heading}</h2>
            <div class="hero_section_ls_buttons">
              <button>Book a Table</button>
              <button class="secondaryBtn">Online Order</button>
            </div>
          </div>
          <img class="slideImg" src="${elem.img}" alt="" />
      `;

    container.classList.remove("slide-out");
    container.classList.add("slide-in");

    if (index == 2) {
      index = 0;
    } else {
      index++;
    }
  }, 500);
}

setInterval(updateSlide, 4000);

// SLIDER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// ON SALE
let onSaleItemsContainer = document.querySelector(".onSaleItemsContainer");
fetch("https://672381a8493fac3cf24b2055.mockapi.io/sushi")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      if (item.salePercent) {
        onSaleItemsContainer.innerHTML += `
               <div class="swiper-slide">
                <div class="on_sale__item">
                  <img
                    src=${item.img}
                    alt=${item.name}
                  />
                  <p class="on_sale__item__name">${item.name}</p>
                  <span>${item.category}</span>
                  <span>${item.piece ? ` | ` + item.piece : ""}</span>
                  <span>${item.kcal ? ` | ` + item.kcal + `kcal` : ""}</span>
                  <p class="on_sale__item__des">${item.ingredients}</p>
                  <div class="on_sale__item__ending">
                  <div>
                    <div class="on_sale__item__new_price">$ ${Math.floor(
                      (item.price * (100 - item.salePercent)) / 100
                    )}.00</div>
                    <div class="on_sale__item__price">$ ${item.price}.00</div>
                    </div>
                    <div class="on_sale__item__basket_button">
                      <i class="fa-solid fa-basket-shopping"></i>
                    </div>
                  </div>
                </div>
                <div class="on_sale__item__sale_precent">-${
                  item.salePercent
                }%</div>
              </div>
     
            `;
      }
    })
  );

// TESTIMONIALS
var swiperTestimonials = new Swiper(".mySwiperTestimonials", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1100: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
