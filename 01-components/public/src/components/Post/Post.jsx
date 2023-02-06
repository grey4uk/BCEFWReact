import PropTypes from "prop-types";

export function Post(props) {
  // console.log(props);
  const { post } = props;
  return (
    <li>
      <img src={post.path} alt={post.alt} width='600' />;
    </li>
  );
}
Post.propTypes = {
  post: PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
