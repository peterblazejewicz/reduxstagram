import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProps } from '../types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Caption: SFC<PhotoProps> = props => (
  <figcaption>
    <p>{props.post.caption}</p>
    <div className="control-buttons">
      <button
        onClick={props.increment.bind(null, props.index)}
        className="likes"
      >
        &hearts; {props.post.likes}
      </button>
      <Link className="button" to={`/view/${props.post.code}`}>
        <span className="comment-count">
          <span className="speech-bubble" />
          {props.comments[props.post.code] ? (
            props.comments[props.post.code].length
          ) : (
            0
          )}
        </span>
      </Link>
    </div>
  </figcaption>
);

const Figure: SFC<PhotoProps> = props => (
  <figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={`/view/${props.post.code}`}>
        <img
          src={props.post.display_src}
          alt={props.post.caption}
          className="grid-photo"
        />
      </Link>
      <TransitionGroup>
        <CSSTransition classNames="like" timeout={{ enter: 500, exit: 500 }}>
          <span className="likes-heart" key={props.post.likes}>
            {props.post.likes}
          </span>
        </CSSTransition>
      </TransitionGroup>
    </div>
    <Caption {...props} />
  </figure>
);

const Photo: SFC<PhotoProps> = props => <Figure {...props} />;
export default Photo;
