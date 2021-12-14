export function renderPets(pet) {
    const petDiv = document.createElement('div');
    const petRank = document.createElement('p');
    const petName = document.createElement('p');
    const petImg = document.createElement('img');
    const petInfo = document.createElement('p');

    petDiv.classList.add('pet-hold');

    petName.classList.add('name');
    petName.textContent = pet.name;

    petInfo.classList.add('pet-info');
    petInfo.textContent = `is a ${pet.color} ${pet.type}`;

    petImg.src = `./assets/${pet.name}.jpg`;

    petDiv.append(petRank, petImg, petName, petInfo);

    return petDiv;
}