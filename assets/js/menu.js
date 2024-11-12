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
