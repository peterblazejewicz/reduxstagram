import React, { Component, FormEvent } from 'react';
import { Comment } from '../types/';
import { SingleProps } from '../types';
import autobind from 'autobind-decorator';

class Comments extends Component<SingleProps, {}> {
  author: HTMLInputElement;
  comment: HTMLInputElement;
  commentForm: HTMLFormElement;

  @autobind
  renderComment(comment: Comment, index: number) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.match.params.code,
              index,
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }

  @autobind
  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { code } = this.props.match.params;
    const author = this.author.value;
    const comment = this.comment.value;
    this.props.addComment(code, author, comment);
    this.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref={form => {
            this.commentForm = form!;
          }}
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            ref={input => {
              this.author = input!;
            }}
            placeholder="author"
          />
          <input
            type="text"
            ref={input => {
              this.comment = input!;
            }}
            placeholder="comment"
          />
          <input type="submit" hidden={true} />
        </form>
      </div>
    );
  }
}

export default Comments;
