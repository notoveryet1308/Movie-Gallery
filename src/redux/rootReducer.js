import {combineReducers} from 'redux'
import nowplayingReducer from './NowPlayingReducer/reducer';
import moviedetailReducer from './MovieDeatilReducer/reducer';
import popularMovieReducer from './PopularMovieReducer/reducer';
import topRatedReducer from './TopRatedReducer/reducer';
import upcomingMovieReducer from './UpcomingMovieReducer/reducer';
const rootReducer = combineReducers({
    nowplaying: nowplayingReducer,
    moviedetail: moviedetailReducer,
    popularmovie: popularMovieReducer,
    toprated: topRatedReducer,
    upcomingmovie: upcomingMovieReducer
   
})

export default rootReducer;