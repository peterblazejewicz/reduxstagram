import { Post } from '../data/posts';
import { Action } from 'redux';
// a posts reducer

export interface PostsAction extends Action {
  type: string;
  index: number;
}

const PostsReducer = (state: Post[] = [], action: PostsAction): Post[] => {
  // tslint:disable-next-line:no-console
  console.log(state, action.type);
  switch (action.type) {
    case 'INCREAMENT_LIKES':
      let post: Post = state[action.index];
      return [
        ...state.slice(0, action.index),
        { ...post, likes: post.likes + 1 },
        ...state.slice(action.index),
      ];
    default:
      return state;
  }
};
export default PostsReducer;
