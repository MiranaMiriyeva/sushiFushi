let hamburgerBtn = document.querySelector(".hamburger");
let responsiveMenu = document.querySelector(".responsive_menu");
let responsiveLink = document.querySelectorAll(".responsive_link");

let isOpen = false;
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

// BASKET TABLE DATA
let tbody = document.querySelector("tbody");
let localBasket = JSON.parse(localStorage.getItem("basket"));
let removeAll = document.querySelector(".removeAll");
let subTotalPrice = document.querySelector(".subTotalPrice");
let subTotalPriceValue = 0;

console.log(localBasket);

if (localBasket) {
  localBasket.forEach((localBasketItem) => {
    fetch("https://672381a8493fac3cf24b2055.mockapi.io/sushi")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((dataItem) => {
          if (dataItem.id == localBasketItem.id) {
            tbody.innerHTML += `
                   <tr>
              <td class="product_td">
                <img
                  src="${dataItem.img}"
                  alt="${dataItem.name}"
                />
                <div>
                  <h2>${dataItem.name}</h2>
                  <p>
                  ${dataItem.ingredients}
                  </p>
                </div>
              </td>
              <td class="price"> <span>$</span> <span> ${Math.floor(
                (dataItem.price * (100 - dataItem.salePercent)) / 100
              )}</span><span>.00</span></td>
              <td class="count_td">
                <button id="${
                  localBasketItem.id
                }" class="countBtn decreaseBtn">-</button>
                <span class="itemCount">${localBasketItem.count}</span>
                <button id="${
                  localBasketItem.id
                }" class="countBtn increaseBtn">+</button>
              </td>
              <td class="total"><span>$</span><span>${
                Math.floor(
                  (dataItem.price * (100 - dataItem.salePercent)) / 100
                ) * localBasketItem.count
              }</span><span>.00</span></td>
              <td id="${
                localBasketItem.id
              }" class="removeBtn"><i class="fa-solid fa-trash"></i></td>
            </tr>
                `;
            subTotalPriceValue +=
              Math.floor(
                (dataItem.price * (100 - dataItem.salePercent)) / 100
              ) * localBasketItem.count;
            removeItem();
            increaseItem();
            decreaseItem();
          }
        });
        subTotalPrice.innerHTML = `$${subTotalPriceValue}.00`;
      });
  });
}

removeAll.addEventListener("click", function () {
  localStorage.clear();
  tbody.innerHTML = ``;
});

function removeItem() {
  let removeBtn = document.querySelectorAll(".removeBtn");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.parentElement.remove();
      localBasket = localBasket.filter((obj) => obj.id != btn.id);
      localStorage.setItem("basket", JSON.stringify(localBasket));
    });
  });
}
function increaseItem() {
  let increaseBtn = document.querySelectorAll(".increaseBtn");
  increaseBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.previousElementSibling.textContent++;
      btn.parentElement.nextElementSibling.children[1].textContent =
        btn.previousElementSibling.textContent *
        btn.parentElement.previousElementSibling.children[1].textContent;
      let increaseElem = localBasket.find((elem) => elem.id == btn.id);
      increaseElem.count++;
      localStorage.setItem("basket", JSON.stringify(localBasket));
    });
  });
}
function decreaseItem() {
  let decreaseBtn = document.querySelectorAll(".decreaseBtn");
  decreaseBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.nextElementSibling.textContent == 1) {
        btn.parentElement.parentElement.remove();
        localBasket = localBasket.filter((obj) => obj.id != btn.id);
        localStorage.setItem("basket", JSON.stringify(localBasket));
      } else {
        btn.nextElementSibling.textContent--;
        btn.parentElement.nextElementSibling.children[1].textContent =
          btn.nextElementSibling.textContent *
          btn.parentElement.previousElementSibling.children[1].textContent;
        let increaseElem = localBasket.find((elem) => elem.id == btn.id);
        increaseElem.count--;
        localStorage.setItem("basket", JSON.stringify(localBasket));
      }
    });
  });
}
