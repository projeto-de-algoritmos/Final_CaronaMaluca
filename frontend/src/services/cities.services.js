import api from "../config/axios.config";

export async function GetAllCities() {
    return api.get(`database/cities`);
}

export async function GetDijkstraResult(zipcodestart, zipcodeend) {
    return api.get(`/shortpath/start/${zipcodestart}/end/${zipcodeend}`);
}

export async function GetDistance(origin, destiny) {
    return api.get(`/distance/origin/${origin}/destiny/${destiny}`);
}



