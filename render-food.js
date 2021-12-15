export function renderFoods(food) {
    const foodDiv = document.createElement('div');
    const foodName = document.createElement('p');
    const foodType = document.createElement('p');
    const foodPrep = document.createElement('p');
    const foodHeat = document.createElement('p');
    const foodInfo = document.createElement('div');

    foodDiv.classList.add('food-hold');

    foodInfo.append(foodPrep, foodHeat);
    foodDiv.append(foodName, foodType, foodInfo);
}