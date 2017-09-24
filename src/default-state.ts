import { Comments } from './data/comments';
import { Posts } from './data/posts';

export interface DefaultState {
  comments: Comments;
  posts: Posts[];
}
