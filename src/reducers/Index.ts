import { combineReducers } from 'redux';
import CommentsReducer from './Comments';
import PostsReducer from './Posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default rootReducer;
