import {combineReducers} from 'redux'
import nowplayingReducer from './NowPlayingReducer/reducer';
import moviedetailReducer from './MovieDeatilReducer/reducer';
import popularMovieReducer from './PopularMovieReducer/reducer';
import topRatedReducer from './TopRatedReducer/reducer';
import upcomingMovieReducer from './UpcomingMovieReducer/reducer';
import discoveredMoviesReducer from './DiscoveredReducer/reducer';
import genreReducer from './GenreReducer/reducer';
import searchReducer from './SearchmovieReducer/reducer';
const rootReducer = combineReducers({
    nowplaying: nowplayingReducer,
    moviedetail: moviedetailReducer,
    popularmovie: popularMovieReducer,
    toprated: topRatedReducer,
    upcomingmovie: upcomingMovieReducer,
    genre: genreReducer,
    discoveredmovies: discoveredMoviesReducer,
    search: searchReducer
   
})

export default rootReducer;