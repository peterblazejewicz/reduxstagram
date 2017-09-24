import { match } from 'react-router';
import { IncrementLikes, AddComment, RemoveComment } from '../actions';
export interface Post {
  caption: string;
  code: string;
  display_src: string;
  id: string;
  likes: number;
}

export interface Comment {
  text: string;
  user: string;
}
export interface Comments {
  [id: string]: Comment[];
}

export interface DefaultState {
  comments: Comments;
  posts: Post[];
}

export const ADD_COMMENT = 'ADD_COMMENT';
export const INCREAMENT_LIKES = 'INCREAMENT_LIKES';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export type ADD_COMMENT = typeof ADD_COMMENT;
export type INCREAMENT_LIKES = typeof INCREAMENT_LIKES;
export type REMOVE_COMMENT = typeof REMOVE_COMMENT;

export interface SingleProps {
  match: match<Post>;
  index: number;
  post: Post;
  posts: Post[];
  comments: Comments;
  postComments: Comment[];
  addComment: (id: string, author: string, comment: string) => AddComment;
  increment: (index: number) => IncrementLikes;
  removeComment: (id: string, index: number) => RemoveComment;
}

export interface PhotoProps {
  index: number;
  posts: Post[];
  post: Post;
  comments: Comments;
  increment: (index: number) => IncrementLikes;
}
