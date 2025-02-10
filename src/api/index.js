import axios from "axios";
export const api_key = "8456598f57379ec11a528c54f320d481";
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
