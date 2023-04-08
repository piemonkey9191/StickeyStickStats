const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const playerBox = document.querySelector('.player-box');
const playerDetails = document.querySelector('.player-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const player = document.querySelector('.search-box input').value;

    if (player === '')
        return;

    fetch("https://v1.hockey.api-sports.io/teams?id=119", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1.hockey.api-sports.io",
            "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
        }
    })
})