const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const playerBox = document.querySelector('.player-box');
const playerDetails = document.querySelector('.player-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const APIKey = '';
    const player = document.querySelector('.search-box input').ariaValueMax;

    if (player === '')
        return;

    fetch('')
})