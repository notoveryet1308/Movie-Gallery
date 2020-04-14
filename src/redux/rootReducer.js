import {combineReducers} from 'redux'
import nowplayingReducer from './NowPlayingReducer/reducer';
import moviedetailReducer from './MovieDeatilReducer/reducer';
const rootReducer = combineReducers({
    nowplaying: nowplayingReducer,
    moviedetail: moviedetailReducer
})

export default rootReducer;