import { API_TOKEN, API_URL } from "./config"
export default function getVideoFromMovie({ id }) {
    return fetch(`${API_URL}/movie/${id}/videos`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
}