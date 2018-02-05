import React from 'react';

import styles from './index.module.css';

class PostTimestamp extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <p className={styles.timestamp}>Published at <time dateTime={post.createdAtTimestamp}>{post.createdAt}</time></p>
    )
  }
}

export default PostTimestamp;
