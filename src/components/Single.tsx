import React, { SFC } from 'react';
import Photo from '../components/Photo';
import {
  addComment,
  IncrementLikes,
  increment,
  removeComment,
} from '../actions/index';
import { Comment, DefaultState, SingleProps } from '../types';
import { Dispatch, connect } from 'react-redux';
import CommentsComponent from './Comments';

const Single: SFC<SingleProps> = props => {
  const code = props.match.params.code;
  const index = props.posts.findIndex(_ => _.code === code);
  const post = props.posts[index];
  const postComments: Comment[] = props.comments[code] || [];
  return (
    <div className="single-photo">
      <Photo {...props} key={index} index={index} post={post} />
      <CommentsComponent {...props} postComments={postComments} />
    </div>
  );
};

const mapStateToProps = (state: DefaultState, ownProps = {}) => {
  return {
    posts: state.posts,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IncrementLikes>) => ({
  increment: (index: number) => {
    dispatch(increment(index));
  },
  removeComment: (id: string, index: number) => {
    dispatch(removeComment(id, index));
  },
  addComment: (id: string, author: string, comment: string) => {
    dispatch(addComment(id, author, comment));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);
