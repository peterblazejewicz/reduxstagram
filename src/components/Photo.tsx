import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/index';
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
    </div>
  </figure>
);
export default Photo;
