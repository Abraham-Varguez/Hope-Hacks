const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery='';
const APP_ID = '6a3f3274';
const  APP_key ='e98b7066b1e110e26ed03a907ce97899';

searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
});

async function fetchAPI(){
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data)

}

function generateHTML(results){
  let generatedHTML ='';
  results.map(result =>{
    generatedHTML +=
    `<div class="item">
    <img src="${result.recipe.image}" alt="#">
    <div class="flex-container">
        <h1 class="title">${result.recipe.label}</h1>
    <a href="${result.recipe.url}" target="_blank">View Recipe</a>
</div>
<p class="item-data"> Calories:${result.recipe.calories.toFixed(2)}</p>
<p class="item-data">Weigth:${result.recipe.totalWeight.toFixed(2)} </p>
<p class="item-data">Nationality:${result.recipe.cuisineType} </p>
<p class="item-data">Label:${result.recipe.dietLabels} </p>

</div>
</div>`

  });
 searchResultDiv.innerHTML = generatedHTML;
}
// dietLabels
// 10,000 month	API CALLSxxwwx