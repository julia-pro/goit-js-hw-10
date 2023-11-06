import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1/";
axios.defaults.headers.common["x-api-key"] = "live_TI5EAlbpezi3Ehi1gb46aHwnZKqI02rOCyjU4QL5D7gYwB43Dbx1o71UYxSwULZi"; 

export function fetchBreeds() {
  return axios.get('breeds')
    .then(response => response.data);
}

export function fetchCatByBreed(id) {
  return axios.get(`images/search?breed_ids=${id}`)
    .then(response => response.data);
}