document.querySelector('.page-header').addEventListener('click', event => {
    const menu = document.querySelector('.language__menu') ? document.querySelector('.language__menu') : document.querySelector('.language__close');
    const iconLanguage = document.querySelector('.page-header__language');
    const iconPlanet = document.querySelector('.language__union');
    const userLanguage = document.querySelector('.language__text');

    if (event.target === menu) {
        menu.classList.toggle('language__close');
        menu.classList.toggle('language__menu');
        document.querySelector('.container-headers').classList.toggle('container-headers_display-mobile');
        document.querySelector('.container-buttons-header').classList.toggle('container-buttons-header_display-mobile');
    }

    if (event.target === iconLanguage || event.target === userLanguage || event.target === iconPlanet) {
        userLanguage.innerText = userLanguage.innerText.toUpperCase() === 'RU' ? 'EN' : 'RU';
    }
});

const container = document.querySelector('.container-elements-of-list');

container.addEventListener('wheel', event => {
    event.preventDefault();

    const scrollSpeed = 15;
    const delta = Math.max(-1, Math.min(1, event?.deltaY || -event?.detail));

    container.scrollTop += delta * scrollSpeed;
});
