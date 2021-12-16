// import functions and grab DOM elements
import { getPets, getHolidays, getFood, getBobs } from './fetch-utils.js';
import { renderPets } from './render-pet.js';
import { renderHolidays } from './render-holiday.js';
import { renderFoods } from './render-food.js';
import { renderBobs } from './render-bob.js';
 // let state
const petContainer = document.querySelector('#pet-container');
const holidayContainer = document.querySelector('#holiday-container');
const foodContainer = document.querySelector('#food-container');
const bobContainer = document.querySelector('#bob-container');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
window.addEventListener('load', async() => {
    const pets = await getPets();

    for (let pet of pets) {
        const petEl = renderPets(pet);

        petContainer.append(petEl);
    }
});

window.addEventListener('load', async() => {
    const holidays = await getHolidays();

    for (let holiday of holidays) {
        const holidayEl = renderHolidays(holiday);

        holidayContainer.append(holidayEl);
    }
});

window.addEventListener('load', async() => {
    const foods = await getFood();

    for (let food of foods) {
        const foodEl = renderFoods(food);

        foodContainer.append(foodEl);
    }
});

window.addEventListener('load', async() => {
    const bobs = await getBobs();

    for (let bob of bobs) {
        const bobEl = renderBobs(bob);

        bobContainer.append(bobEl);
    }
});