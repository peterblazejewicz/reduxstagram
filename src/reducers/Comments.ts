import { Comments, Comment } from '../types/';
import { Action } from 'redux';
// a posts reducer

export type CommentsAction = AddComment | RemoveComment;

interface CommentsBaseAction extends Action {
  type: string;
  postId?: string;
}
interface AddComment extends CommentsBaseAction {
  user: string;
  text: string;
}
interface RemoveComment extends CommentsBaseAction {
  index: number;
}

const postComments = (state: Comment[], action: CommentsAction): Comment[] => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          text: (action as AddComment).text,
          user: (action as AddComment).user,
        },
      ];
    case 'REMOVE_COMMENT':
      const index = (action as RemoveComment).index;
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};
const CommentsReducer = (
  state: Comments = {},
  action: CommentsAction,
): Comments => {
  // tslint:disable-next-line:no-console
  console.log(state, action);
  if (action.postId) {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action),
    };
  }
  return state;
};
export default CommentsReducer;
