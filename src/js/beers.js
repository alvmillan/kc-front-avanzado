import api from './api';

import defaultImg from './../images/default.png';

const { getBeers } = api();

const templateBeer = ({beerId, name, image, description, likes}) => `
    <div id="${beerId}" class="card principal">
    <header class="card-header">
      <a href="detail.html?id=${beerId}" <h2>${name}</h2></a>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="${image? image : defaultImg}">
      </div>
      <div class="card-content-text">
        <p>${description}</p>
        <div class="rating-container">
          <span class="like-container">${likes} likes</span>
        </div>
      </div>
    </div>
  </div>
`

const renderShows = (element, beers) => {
    const htmlBeers = beers
    .map( beer => templateBeer(beer)).join('');
    element.innerHTML = htmlBeers;
};

export const renderDOMBeers = async (query, limit = 10) => {
    try {
        const fetchBeers = await getBeers(query, limit);
        const beerSection = document.getElementById('beer-section');
        renderShows(beerSection, fetchBeers);
    } catch (e) {
        console.error(e);
    }
}

renderDOMBeers();