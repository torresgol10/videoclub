import { API_TOKEN, API_URL } from "./config"
export default function getOriginalNetflix() {
    return fetch(`${API_URL}/discover/tv?with_networks=213&language=es-ES`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json"            
        }
    }).then(res => res.json())
}