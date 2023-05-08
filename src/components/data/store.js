import {reactive} from 'vue';

export const store = reactive ({
  // film
  ApiUrlFilm:'https://api.themoviedb.org/3/search/movie?api_key=33a04d49507ef52a4b68817fb0991a1a&language=it-IT',  
  FilmRequest:[],
  // series
  ApiUrlSeries:'https://api.themoviedb.org/3/search/tv?api_key=33a04d49507ef52a4b68817fb0991a1a&language=it-IT',
  SeriesRequest:[],
  //popular
  ApiUrlPopular:'https://api.themoviedb.org/3/movie/popular?api_key=33a04d49507ef52a4b68817fb0991a1a&language=en-US&page=1',
  Populars:[],

  searchTitle:"",
})
