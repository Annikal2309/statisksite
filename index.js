// console.log("index script er loaded");

// fetch("https://kea-alt-del.dk/t7/api/categories")
//   .then((response) => response.json())
//   .then(showCategori);

// function showCategori(data) {
//   console.log("mine data er:", data);

//   const markup = data
//     .map(
//       (element) => `<li><a href="productlist.html?category=${element.category}'>${element.category}</a></li>
//     `
//     )

//     .join("");

//   console.log("min markup er", markup);
//   document.querySelector("ul").innerHTML = markup;
// }

let catList = document.querySelector("#category_list_container");
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => getCat(data));

function getCat(categories) {
  const markup = categories
    .map((data) => `<a href="productlist.html?category=${data.category}"><li>${data.category}</li></a>`)

    .join("");
  console.log(markup);
  catList.innerHTML = markup;
}
