

import { API_TOKEN, API_URL } from "./config"

export default function getMoviesFromKeyword({ keyword }) {
    return fetch(`${API_URL}/search/movie?language=es-ES&query=${keyword}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json"            
        }
    }).then(res => res.json())
}