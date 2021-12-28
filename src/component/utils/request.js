const API_KEY = "463093949828fa91478b436360dbf177";

export const request = [
  {
    name: "Netflix Original",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: true,
  },
  {
    name: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    isLarge: false,
  },
  {
    name: "Comdey",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    name: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    isLarge: false,
  },
  {
    name: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
  },
  {
    name: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
];
