import { combineReducers } from 'redux';
import PostsReducer from './Posts';
import CommentsReducer from './Comments';

const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
});

export default rootReducer;
