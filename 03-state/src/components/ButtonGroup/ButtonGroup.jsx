import { Component } from "react";

const handleStyle = (color) => ({
  dislay: "block",
  width: "200px",
  height: "200px",
  background: color,
});

class ButtonGroup extends Component {
  state = { left: "#fa1234", right: "#52fd23" };

  changeColor = (e) => {
    //     const { name } = e.target;
    const { position: name } = e.target.dataset;

    const color = this.randomColor();

    this.setState({ [name]: color });
  };

  randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  render() {
    const { left, right } = this.state;
    return (
      <div style={{ display: "flex", gap: "40px" }}>
        <div>
          <div style={handleStyle(left)}></div>
          <button
            //   name='left'
            data-position='left'
            type='button'
            onClick={this.changeColor}>
            Change color
          </button>
        </div>
        <div>
          <div style={handleStyle(right)}></div>
          <button
            //   name='right'
            data-position='right'
            type='button'
            onClick={this.changeColor}>
            Change color
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonGroup;
