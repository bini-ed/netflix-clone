import axios from "axios";

export const getBanners = (value) => {
  return axios.get(`https://api.themoviedb.org/3${value}`);
};
