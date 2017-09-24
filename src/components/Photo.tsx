import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/index';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface PhotoProps {
  index: number;
  post: Post;
}

const Photo: SFC<PhotoProps> = ({ post, index }) => (
  <figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={`/view/${post.code}`}>
        <img src={post.display_src} alt={post.caption} className="grid-photo" />
      </Link>
      <TransitionGroup>
        <CSSTransition classNames="like" timeout={{ enter: 500, exit: 500 }}>
          <span className="likes-heart" key={post.likes}>
            {post.likes}
          </span>
        </CSSTransition>
      </TransitionGroup>
    </div>
    <figcaption>
      <p>{post.caption}</p>
      <div className="control-buttons">
        <button className="likes">&hearts; {post.likes}</button>
      </div>
    </figcaption>
  </figure>
);
export default Photo;
