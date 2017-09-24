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
