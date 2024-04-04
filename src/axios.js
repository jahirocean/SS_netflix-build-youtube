import axios from "axios";
const instants = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instants;
