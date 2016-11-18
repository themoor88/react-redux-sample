import { combineReducers } from 'redux';
import { VideosReducer } from './reducer_books';

const rootReducer = combineReducers({
  videos: VideoReducer,
});

export default rootReducer;
