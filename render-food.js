export function renderFoods(food) {
    const foodDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const foodName = document.createElement('p');
    const foodType = document.createElement('p');
    const foodPrep = document.createElement('p');
    const foodHeat = document.createElement('p');
    const foodInfo = document.createElement('div');

    foodDiv.classList.add('food-hold');
    nameDiv.classList.add('name-hold');

    foodName.classList.add('food-name');
    foodName.textContent = food.name;

    foodType.classList.add('food-type');
    foodType.textContent = food.type;

    foodInfo.classList.add('food-info');
    foodPrep.textContent = `Total prep (min): ${food.prep_time}`;
    foodHeat.textContent = `Serve hot: ${food.serve_hot}`;

    nameDiv.append(foodName, foodType);
    foodInfo.append(foodPrep, foodHeat);
    foodDiv.append(nameDiv, foodInfo);

    return foodDiv;
}