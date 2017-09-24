import React, { SFC } from 'react';
import { connect, Dispatch } from 'react-redux';
import { DefaultState, Post, Comments } from '../types';
import Photo from './Photo';
import { increment, IncrementLikes } from '../actions';

interface PhotoProps {
  posts: Post[];
  comments: Comments;
  increment: (index: number) => IncrementLikes;
}

const PhotoGrid: SFC<PhotoProps> = props => (
  <div className="photo-grid">
    {props.posts.map((post, index) => (
      <Photo {...props} key={index} index={index} post={post} />
    ))}
  </div>
);

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
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
