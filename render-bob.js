export function renderBobs(bob) {
    const bobDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const bobTitle = document.createElement('p');
    const bobHoliday = document.createElement('p');
    const bobEpisode = document.createElement('p');
    const bobDescription = document.createElement('p');

    bobDiv.classList.add('bob-hold');
    titleDiv.classList.add('title-hold');

    bobTitle.classList.add('bob-title');
    bobTitle.textContent = bob.title;

    bobHoliday.classList.add('bob-holiday');
    bobHoliday.textContent = bob.holiday;
    
    bobEpisode.classList.add('bob-episode');
    bobEpisode.textContent = bob.episode;
    
    bobDescription.classList.add('bob-description');
    bobDescription.textContent = bob.description;

    titleDiv.append(bobTitle, bobEpisode);
    bobDiv.append(titleDiv, bobHoliday, bobDescription);

    return bobDiv;
}