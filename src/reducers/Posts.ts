import { Posts } from '../data/posts';
import { Action } from 'redux';
// a posts reducer

interface PostsAction extends Action {
  type: string;
  payload: Posts[];
}

const posts = (state: Posts[] = [], action: PostsAction) => {
  // tslint:disable-next-line:no-console
  console.log(state, action);
  return state;
};
export default posts;
