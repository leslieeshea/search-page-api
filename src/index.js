import loadAlbums from './list-component.js';
import { readFromQuery } from './query-component.js';
import { updateSearchInput } from '../src/search-component.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    console.log(queryOptions);
});