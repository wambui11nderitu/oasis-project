alert("COME FEEL A SYMPHONY OF RELAXION AND REJUVENATION")
async function fetchMeals() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const data = await response.json();
    return data.meals;
}

function displayMeals(meals) {
    const mealList = document.getElementById('mealList');
    mealList.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p>${meal.strInstructions}</p>
        `;
        mealList.appendChild(mealDiv);
    });
}

async function searchMeal() {
    const searchInput = document.getElementById('search');
    const searchQuery = searchInput.value.toLowerCase();

    const meals = await fetchMeals();
    const filteredMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchQuery));

    displayMeals(filteredMeals);
}

// Initial fetch and display
fetchMeals().then(meals => displayMeals(meals));