const API_KEY = "32d0c559d4f922d14ea1f7f066e100a4";

const request = {
  netflixOriginalsFetch: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  trendingFetch: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRatedFetch: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  comedyMovieFetch: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  actionMovieFetch: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  horrorMovieFetch: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovieFetch: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default request;
