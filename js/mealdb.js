console.log('js added');

const searchFood=()=>{
    
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(response=>response.json())
    .then(json=>displaySearchResult(json.data))
    searchField.value='';
}


const displaySearchResult=foods=>{
    const resultContainer=document.getElementById('search-result');
    resultContainer.innerHTML='';
    foods.forEach(food=>{
        console.log(food);
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div onclick="loadMealById(${food.slug})" class="card h-100 p-3">
        <img src="${food.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${food.phone_name}</h5>
          <p class="card-text">${food.brand}</p>
         
        </div>
      </div>

        `;
        resultContainer.appendChild(div);
    })
}

const loadMealById=mealId=>{
    const url=` https://openapi.programming-hero.com/api/phone/${mealId}`;
    fetch(url)
    .then(response=>response.json())
    .then(json =>displayMealById(json.data[2]))
}

const displayMealById=meal=>{
    const mealDetailsContainer=document.getElementById('details-container');
    const div=document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
    <div>
    <img src="${meal.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.phone_name}</h5>
      <p class="card-text">${meal.brand}</p>
      
    </div>
  </div>
    `;
    mealDetailsContainer.appendChild(div);
}