import * as constants from '../types';

export interface IncrementLikes {
  type: constants.INCREAMENT_LIKES;
  index: number;
}

export interface AddComment {
  type: constants.ADD_COMMENT;
  id: string;
  author: string;
  comment: string;
}
export interface RemoveComment {
  type: constants.REMOVE_COMMENT;
  id: string;
  index: number;
}

export type CommentsAction = AddComment | RemoveComment;

/**
 * Increaments comments count
 * @param {number} index
 */
const increment: (index: number) => IncrementLikes = index => ({
  type: constants.INCREAMENT_LIKES,
  index,
});

/**
 * Adds a comment to a post
 * @param {number} id
 * @param {string} author
 * @param {string} comment
 */
const addComment: (
  id: string,
  author: string,
  comment: string,
) => AddComment = (id, author, comment) => ({
  type: constants.ADD_COMMENT,
  id,
  author,
  comment,
});

/**
 * Removes a comment of given ids from a post of id
 * @param {number} id
 * @param {number} index
 */
const removeComment: (id: string, index: number) => RemoveComment = (
  id,
  index,
) => ({
  type: constants.REMOVE_COMMENT,
  id,
  index,
});

export { increment, addComment, removeComment };
