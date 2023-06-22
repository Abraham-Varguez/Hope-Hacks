const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "6a3f3274";
const APP_key = "e98b7066b1e110e26ed03a907ce97899";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `

    <div class="item">

    <h1 class="title">${result.recipe.label}</h1>
    <img src="${result.recipe.image}" alt="#">

    <div class="item-data-container">
    <p class="item-data"> Calories:      ${result.recipe.calories.toFixed(0)}</p>
    <p class="item-data">Weigth:       ${result.recipe.totalWeight.toFixed(0)} oz</p>
    <p class="item-data">Cuisine Type:      ${result.recipe.cuisineType} </p>
    <p class="item-data">${result.recipe.dietLabels}</p>
    </div>
    <a class="btn-api" href="${ result.recipe.url }" target="_blank">View Recipe</a>

    </div>
`;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
// dietLabels
// 10,000 month	API CALLS
