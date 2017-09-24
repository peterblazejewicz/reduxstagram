import { Post, INCREAMENT_LIKES } from '../types';
import { IncrementLikes } from '../actions';

// a posts reducer

const PostsReducer = (state: Post[] = [], action: IncrementLikes): Post[] => {
  // tslint:disable-next-line:no-console
  switch (action.type) {
    case INCREAMENT_LIKES:
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
