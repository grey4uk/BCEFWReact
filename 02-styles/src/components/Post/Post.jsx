import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Title from "../Title/Title";
import s from "./Post.module.scss";
import { ReactComponent as Star } from "../../helpers/star-solid.svg";

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export function Post(props) {
  // console.log(props);
  const { post } = props;

  return (
    <li
      style={{
        backgroundColor: randomColor(),
        padding: "20px",
      }}>
      <Card style={{ width: "25rem" }}>
        <img
          src={post.path}
          alt={post.alt}
          className={post.active ? s.active : s.unactive}
        />
        <Card.Body>
          <Card.Title>
            <Title
              text={post.alt}
              boldStyle={post.active}
            />
          </Card.Title>
          <Button
            variant='primary'
            style={{ backgroundColor: "grey" }}>
            Go somewhere
            <Star
              style={{
                width: "18px",
                height: "18px",
                fill: "yellow",
              }}
            />
          </Button>
        </Card.Body>
      </Card>
    </li>
  );
}
Post.propTypes = {
  post: PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }),
};
