import { Comments } from './data/comments';
import { Post } from './data/posts';

export interface DefaultState {
  comments: Comments;
  posts: Post[];
}
