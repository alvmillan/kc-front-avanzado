
const API_KEY = 'P159XTK-48K4FCQ-GQB90FR-Y32RP0V';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers') => {
    const SHOWS_URL = `${API_URL}`;
    return {
        createQuote: async (id, text) => {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'GET',
                    body: JSON.stringify({
                        quote: text
                    }),
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
        getShows: async (query) => {
            try {
                const requestUrl = query ? `${SEARCH_API_URL}${query}` : SHOWS_URL
                const response = await fetch(requestUrl);
                const datos = await response.json();
                const mapDatos = datos.map((dato) => {
                    if (dato.show) {
                        return dato.show;
                    }
                    return dato;
                })
                return mapDatos;
            } catch (e) {
                console.error(e);
                throw e;
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
        getShowsDetail: async (id) => {
            try {
                const response = await fetch(`${SHOWS_URL}/${id}`);
                const show = await response.json();
                return show;
            } catch (e) {
                console.error(e);
                throw e;
            }
        }
    };
}

export default api;