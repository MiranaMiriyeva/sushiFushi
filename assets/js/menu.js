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

// MENU ITEMS
let menuItemContainer = document.querySelector(".menu_item__container");
fetch("https://672381a8493fac3cf24b2055.mockapi.io/sushi")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      handleTextContent(item);
    })
  );

// SELECTING CATEGORIES IN MENU
let categoriesItems = document.querySelectorAll(".categories_item_value");
categoriesItems.forEach((value) => {
  value.addEventListener("click", () => {
    menuItemContainer.innerHTML = ``;
    fetch("https://672381a8493fac3cf24b2055.mockapi.io/sushi")
      .then((res) => res.json())
      .then((data) =>
        data.forEach((item) => {
          if (
            value.textContent.toLocaleLowerCase() ===
            item.category.toLocaleLowerCase()
          ) {
            handleTextContent(item);
          } else if (value.textContent.toLocaleLowerCase() === "all menu") {
            menuItemContainer.innerHTML += `
      `;
            handleTextContent(item);
          }
        })
      );
  });
});

function handleTextContent(item) {
  menuItemContainer.innerHTML += `
  <div class="menu__item">
    <div class="menu__item__top">
             <img
               src=${item.img}
               alt=${item.name}
             />
           
     <p class="menu__item__name">${item.name}</p>
     <span>${item.category}</span>
      <span>${item.piece ? ` | ` + item.piece : ""}</span>
      <span>${item.kcal ? ` | ` + item.kcal + `kcal` : ""}</span>
      <p class="menu__item__des">${item.ingredients}</p>
      </div>
     <div class="menu__item__ending">
       <div>
         <div class="menu__item__new_price">$ ${Math.floor(
           (item.price * (100 - item.salePercent)) / 100
         )}.00</div>
         ${
           item.salePercent
             ? `<div class="menu__item__price">${
                 "$" + item.price + `.00`
               }</div>`
             : ""
         }
 
       </div>
       <div class="menu__item__basket_button">
         <i class="fa-solid fa-basket-shopping"></i>
       </div>
     </div>
     ${
       item.salePercent
         ? `<div class="menu__item__sale_precent">- ${item.salePercent}%</div>`
         : ""
     }   
   </div>
       `;
}
