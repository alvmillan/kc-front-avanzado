
const API_KEY = 'P159XTK-48K4FCQ-GQB90FR-Y32RP0V';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers') => {
    return {
        addLike: async (id) => {
            try {
                const response = await fetch(`${API_URL}/${id}/like`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY
                    }
                });
                if (!response.ok) {
                    throw 'Error';
                }
                const quote = await response.json();
                return quote;
            } catch (e) {
                console.error(e);
            }
        },
        getBeers: async (query, limit = 10, ) => {
            try {
                const requestUrl = query ? `${API_URL}?search=${query}&limit=${limit}` : `${API_URL}?limit=${limit}`;
                const response = await fetch(requestUrl, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY
                    }
                });
                const datos = await response.json();
                return datos.beers;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        getBeerDetail: async (id) => {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY
                    }
                });
                const beer = await response.json();
                return beer.beer;
            } catch (e) {
                console.error(e);
                throw e;
            }
        }
    };
}

export default api;