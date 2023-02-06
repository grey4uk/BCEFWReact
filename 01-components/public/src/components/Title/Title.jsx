import PropTypes from "prop-types";

// const Title = ({ text = "we haven't text" }) => {
//   return <h2>{text}</h2>;
// };
// export default Title;

const Title = ({ text }) => {
  return <h2>{text ? text : "we haven't text"}</h2>;
};
export default Title;

Title.propTypes = {
  text: PropTypes.string,
};
