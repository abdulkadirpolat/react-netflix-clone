import axios from "axios";

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default request;
