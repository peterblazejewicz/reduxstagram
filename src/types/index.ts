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
