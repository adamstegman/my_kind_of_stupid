import React from 'react';

import PostTimestamp from '../PostTimestamp';
import { body } from './index.module.css';

class Post extends React.Component {
  render() {
    const post = this.props.post.fields.post;

    let title = post.title;
    if (post.link) {
      title = <a href={post.link}>{post.title}</a>;
    }

    return (
      <article>
        <h2>{title}</h2>
        <section className={body} dangerouslySetInnerHTML={{ __html: this.props.post.html }}></section>
        <footer>
          <PostTimestamp post={post} />
        </footer>
      </article>
    );
  }
}

export default Post;
