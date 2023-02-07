import PropTypes from "prop-types";
import { Post } from "../Post/Post";

import styles from "./PostList.module.scss";

const PostList = ({ posts }) => {
  console.log("styles", styles);
  return (
    <ol className={styles.container}>
      {posts.map(({ id, ...post }) => {
        return <Post key={id} post={post} />;
      })}
    </ol>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.exact({
      path: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ),
};

export default PostList;
