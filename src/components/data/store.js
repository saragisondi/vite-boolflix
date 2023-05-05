import {reactive} from 'vue';

export const store = reactive ({
  ApiUrlFilm:'https://api.themoviedb.org/3/search/movie?api_key=33a04d49507ef52a4b68817fb0991a1a&language=it-IT',  
  FilmRequest:[],
  ApiUrlSeries:'https://api.themoviedb.org/3/search/tv?api_key=33a04d49507ef52a4b68817fb0991a1a&language=it-IT',
  SeriesRequest:[],
  searchTitle:"Spider man",
})
