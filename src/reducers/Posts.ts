import { Post, INCREAMENT_LIKES } from '../types';
import { IncrementLikes } from '../actions';

// a posts reducer

const PostsReducer = (state: Post[] = [], action: IncrementLikes): Post[] => {
  // tslint:disable-next-line:no-console
  switch (action.type) {
    case INCREAMENT_LIKES:
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], likes: state[action.index].likes + 1 },
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};
export default PostsReducer;
