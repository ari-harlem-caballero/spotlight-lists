// import functions and grab DOM elements
import { getPets, getHolidays } from './fetch-utils.js';
import { renderPets } from './render-pet.js';
import { renderHolidays } from './render-holiday.js';
// let state
const petContainer = document.querySelector('#pet-container');
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

getHolidays();