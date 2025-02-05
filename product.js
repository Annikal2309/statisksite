// const myId = URLSearchParams(window.location.search).get("id");

// let productDesc = document.querySelector("#product_container");
// fetch(`https://kea-alt-del.dk/t7/api/products/${myId}`)
//   .then((response) => response.json())
//   .then((data) => {
//     productDesc.innerHTML = `

// <figure>
// <img
// src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
// alt="Produktbillede"
// class="productImage"
// />
// <span class="saleLabel">-${data.discount}%</span>
// </figure>
// <section class="productDetails">
// <h2 class="productName">${data.productdisplayname}</h2>
// <div>
// <p class="articleType><span class="bold">Type:</span> ${data.articletype}</p>
// <p class="productCategory"><span class="bold">Kategori:</span> ${data.category}</p>
// <p class="productPrice"><span class="bold">Pris:</span> ${data.price},-</p>
// <p class="discountPrice ${data.discount && "discountActive"}">NOW DKK ${data.discount && Math.floor(data.price * (data.discount / 100))},-</p>
// <div class="soldOutLabel ${data.soldout && "soldOut"}">
// <p><span class"bold">UDSOLGT</span></p>
// </div>
// <div class="saleLabel ${data.discount && "onSale"}">
// <p><span class"bold">-${data.discount}%</span></p>
// </div>
// </div>
// <button class="buyButton">Køb nu</button>
// </section>
// `;
//   });
const myId = new URLSearchParams(window.location.search).get("id");

let productDesc = document.querySelector("#product_container");
fetch(`https://kea-alt-del.dk/t7/api/products/${myId}`)
  .then((response) => response.json())
  .then((data) => {
    productDesc.innerHTML = ` 
    
    <figure>
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
          alt="Produktbillede"
          class="productImage"
        />
        <span class="saleLabel">-${data.discount}%</span>
      </figure>
      <section class="productDetails">
        <h2 class="productName">${data.productdisplayname}</h2>
        <div>
        <p class="articleType"><span class="bold">Type:</span> ${data.articletype}</p>
          <p class="productCategory"><span class="bold">Kategori:</span> ${data.category}</p>
          <p class="productPrice"><span class="bold">Pris:</span> ${data.price},-</p>
            <p class="discountPrice ${data.discount && "discountActive"}">NOW DKK ${data.discount && Math.floor(data.price * (data.discount / 100))},-</p>
           <div class="soldOutLabel ${data.soldout && "soldOut"}">
            <p><span class="bold">UDSOLGT</span></p>
          </div>
          <div class="saleLabel ${data.discount && "onSale"}">
            <p><span class="bold">-${data.discount}%</span></p>
          </div>
        </div>
        <button class="buyButton">Køb nu</button>
      </section>
      
      `;
  });
