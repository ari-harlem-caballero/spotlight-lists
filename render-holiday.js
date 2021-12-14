export function renderHolidays(holiday) {
    const holidayDiv = document.createElement('div');
    const holidayName = document.createElement('p');
    const holidaySeason = document.createElement('p');
    const holidayLength = document.createElement('p');
    const holidayGift = document.createElement('p');
    const holidayImg = document.createElement('img');

    holidayDiv.classList.add('holiday-hold');

    holidayName.classList.add('holiday-name');
    holidayName.textContent = holiday.name;

    holidaySeason.classList.add('holiday-season');
    holidaySeason.textContent = holiday.season;

    holidayLength.classList.add('holiday-length');
    holidayLength.textContent = holiday.days;

    holidayGift.classList.add('holiday-gift');
    holidayGift.textContent = holiday.gifts;

    holidayDiv.append(holidayImg, holidayName, holidaySeason, holidayLength, holidayGift);

    return holidayDiv;
}