import PropTypes from "prop-types";
import clsx from "clsx";
import { FaHome } from "react-icons/fa";
// import { StyledTitle } from "./Title.styled";
import s from "./Title.module.scss";

// const Title = ({ text = "we haven't text" }) => {
//   return <h2>{text}</h2>;
// };
// export default Title;

const Title = ({ text, boldStyle }) => {
  // const resolveStyles = boldStyle
  //   ? s.title + " " + s.activeTitle
  //   : s.title;

  const resolveStyles = clsx(
    s.title,
    boldStyle && s.activeTitle
  );

  return (
    <h2 className={resolveStyles}>
      {text ? text : "we haven't text"}
      <FaHome />
    </h2>
  );
};

//  by styled-components
// const Title = ({ text, boldStyle }) => {
//   return (
//     <StyledTitle boldStyle={boldStyle}>
//       {text ? text : "we haven't text"}
//     </StyledTitle>
//   );
// };

export default Title;

Title.propTypes = {
  text: PropTypes.string,
  boldStyle: PropTypes.bool,
};
