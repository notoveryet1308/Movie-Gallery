import {combineReducers} from 'redux'
import nowplayingReducer from './NowPlayingReducer/reducer';
import moviedetailReducer from './MovieDeatilReducer/reducer';
import popularMovieReducer from './PopularMovieReducer/reducer';
const rootReducer = combineReducers({
    nowplaying: nowplayingReducer,
    moviedetail: moviedetailReducer,
    popularmovie: popularMovieReducer,
   
})

export default rootReducer;