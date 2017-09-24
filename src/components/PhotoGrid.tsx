import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { DefaultState, Post } from '../types';
import Photo from './Photo';

interface PhotoProps {
  posts: Post[];
}

const PhotoGrid: SFC<PhotoProps> = props => (
  <div className="photo-grid">
    {props.posts.map((post, index) => (
      <Photo key={index} index={index} post={post} />
    ))}
  </div>
);

const mapStateToProps = (state: DefaultState, ownProps = {}) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(PhotoGrid);
