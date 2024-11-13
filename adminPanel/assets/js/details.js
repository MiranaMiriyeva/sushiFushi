console.log(window.location.hash.slice(1));
let productCards = document.querySelector(".product_card");
fetch(
  `https://672381a8493fac3cf24b2055.mockapi.io/sushi/` +
    window.location.hash.slice(1)
)
  .then((res) => res.json())
  .then((data) => {
    productCards.innerHTML = `         
     <div class="product_cards_card">
    <img src=${data.img} alt="product_image" />
    <div class="product_cards_card_details">
        <h1>${data.name}</h1>
        <h3 class="product_cards_card_details_price">
        $${data.price}
        </h3>
        <div class="product_cards_card_details_des">
        ${data.description}
        </div>
    </div>
  </div>

    `;
  });
