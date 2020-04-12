import {combineReducers} from 'redux'
import nowplayingReducer from './NowPlayingReducer/reducer'
const rootReducer = combineReducers({
    nowplaying: nowplayingReducer
})

export default rootReducer;