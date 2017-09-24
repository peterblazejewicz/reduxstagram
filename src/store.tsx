import { createStore } from 'redux';
import comments from './data/comments';
import posts from './data/posts';
import { DefaultState } from './default-state';
import rootReducer from './reducers/Index';

const defaultState: DefaultState = {
  comments,
  posts,
};
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, defaultState, composeWithDevTools());
export default store;
