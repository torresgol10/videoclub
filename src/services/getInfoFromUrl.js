import { API_TOKEN, API_URL } from "./config"
export default function getInfoFromUrl({url}) {
    return fetch(`${API_URL}${url}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json"            
        }
    }).then(res => res.json())
}