import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { DefaultState } from './types';
import comments from './data/comments';
import posts from './data/posts';
import rootReducer from './reducers';

const defaultState: DefaultState = {
  comments,
  posts,
};

const store = createStore(rootReducer, defaultState, composeWithDevTools());
export default store;
