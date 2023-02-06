import api from "../config/axios.config";

export async function GetAllCities() {
    return api.get(`database/cities`);
}

export async function GetDijkstraResult(payload) {
    return api.post(`/shortpath/start`, payload);
}

export async function GetDistance(origin, destiny) {
    return api.get(`/distance/origin/${origin}/destiny/${destiny}`);
}



