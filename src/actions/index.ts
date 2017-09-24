/**
 * Increaments comments count
 * @param {number} index
 */
const increament = (index: number) => ({
  type: 'INCREAMENT_LIKES',
  index,
});

/**
 * Adds a comment to a post
 * @param {number} postId
 * @param {string} author
 * @param {string} comment
 */
const addComment = (postId: number, author: string, comment: string) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment,
});

/**
 * Removes a comment of given ids from a post of id
 * @param {number} postId
 * @param {number} idx
 */
const removeComment = (postId: number, idx: number) => ({
  type: 'REMOVE_COMMENT',
  postId,
  idx,
});

export { increament, addComment, removeComment };
