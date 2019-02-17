import { renderDOMBeers } from './beers';

const searchInput = document.querySelector('.input.search');
const searchYear = document.querySelector('.input.search.year');

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    renderDOMBeers(searchInput.value, searchYear.value);    
})