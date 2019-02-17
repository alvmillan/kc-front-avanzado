import striptags from 'striptags';
import api from './api';

import defaultImg from './../images/default.jpg';

const { getBeers } = api();

const templateBeer = ({beerId, name, image, description}) => `
    <div id="${beerId}" class="card principal">
    <header class="card-header">
      <h2>${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="${image? image : defaultImg}">
      </div>
      <div class="card-content-text">
        <p>${striptags(description)}</p>
        <div class="rating-container">
          <button class="icon">
            <i class="fas fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
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