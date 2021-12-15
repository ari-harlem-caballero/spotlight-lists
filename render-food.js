export function renderFoods(food) {
    const foodDiv = document.createElement('div');
    const foodName = document.createElement('p');
    const foodType = document.createElement('p');
    const foodPrep = document.createElement('p');
    const foodHeat = document.createElement('p');
    const foodInfo = document.createElement('div');

    foodDiv.classList.add('food-hold');

    foodName.classList.add('food-name');
    foodName.textContent = food.name;

    foodType.classList.add('food-type');
    foodType.textContent = food.type;

    foodInfo.classList.add('info');
    foodInfo.textContent = `Total prep: ${food.prep_time}, Serve hot: ${food.serve_hot}`;

    foodInfo.append(foodPrep, foodHeat);
    foodDiv.append(foodName, foodType, foodInfo);

    return foodDiv;
}