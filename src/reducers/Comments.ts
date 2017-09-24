import { Comments, Comment, ADD_COMMENT, REMOVE_COMMENT } from '../types/';
import { CommentsAction } from '../actions';
// a posts reducer

const postComments = (state: Comment[], action: CommentsAction): Comment[] => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          text: action.comment,
          user: action.author,
        },
      ];
    case REMOVE_COMMENT:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};
const CommentsReducer = (
  state: Comments = {},
  action: CommentsAction,
): Comments => {
  // tslint:disable-next-line:no-console
  if (action.id) {
    return {
      ...state,
      [action.id]: postComments(state[action.id], action),
    };
  }
  return state;
};
export default CommentsReducer;
