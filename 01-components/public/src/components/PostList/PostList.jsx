import PropTypes from "prop-types";
import { Post } from "../Post/Post";

const PostList = ({ posts }) => {
  return (
    <ol>
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
    })
  ),
};

export default PostList;
