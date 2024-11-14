import { updateItem } from "./crud.js";
let productName = document.getElementById("productName");
let productCategory = document.getElementById("productCategory");
let productIngridients = document.getElementById("productIngridients");
let productPiece = document.getElementById("productPiece");
let productKcal = document.getElementById("productKcal");
let productSalePrecent = document.getElementById("productSalePrecent");
let productPrice = document.getElementById("productPrice");
let productImg = document.getElementById("productImg");
let submitBtn = document.querySelector(".submitBtn");

console.log(
  `https://672381a8493fac3cf24b2055.mockapi.io/sushi/${window.location.hash.slice(
    1
  )}`
);
fetch(
  `https://672381a8493fac3cf24b2055.mockapi.io/sushi/${window.location.hash.slice(
    1
  )}`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    productName.value = data.name;
    productCategory.value = data.category;
    productIngridients.value = data.ingredients;
    productPiece.value = data.piece;
    productKcal.value = data.kcal;
    productSalePrecent.value = data.salePercent;
    productPrice.value = data.price;
    productImg.value = data.img;
  });

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {
    name: productName.value.trim(),
    category: productCategory.value.trim(),
    ingredients: productIngridients.value.trim(),
    piece: productPiece.value.trim(),
    kcal: productKcal.value.trim(),
    price: productPrice.value.trim(),
    salePercent: productSalePrecent.value.trim(),
    img: productImg.value.trim(),
  };
  updateItem("https://672381a8493fac3cf24b2055.mockapi.io/sushi", obj);
});
