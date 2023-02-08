import { Component } from "react";
import Modal from "../Modal/Modal";

class TodoApp extends Component {
  //   static defaultProps = {
  //     array: [
  //       { id: 11, alt: "11" },
  //       { id: 22, alt: "22" },
  //       { id: 33, alt: "33" },
  //     ],
  //   };

  //   state = { todos: this.props.array };

  //   constructor(props) {
  //     super(props);
  //     this.state = { todos: [], flag: false };
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  state = { todos: [], flag: false, isModal: null };

  handleClick = (e) => {
    // wrong
    // this.state.todos=this.props.array
    this.setState(
      (prevState) => {
        return {
          todos: [...prevState.todos, ...this.props.array],
        };
      },
      () =>
        console.log("this.state.todos", this.state.todos)
    );
    //     console.log("this.state.todos :>> ", this.state.todos);
  };

  toggleModal = (item) => {
    this.setState({ isModal: item });
  };

  render() {
    const { todos } = this.state;
    //     console.log("this.props :>> ", this.props.array);
    //     console.log("todos", todos);
    return (
      <>
        <h2>TodoApp</h2>
        <ol>
          {todos?.map(({ id, alt, path }) => (
            <li
              key={id}
              onClick={() =>
                this.toggleModal({ path, alt })
              }>
              <p>{alt}</p>
            </li>
          ))}
        </ol>
        <button type='button' onClick={this.handleClick}>
          Load todos
        </button>
        {this.state.isModal && (
          <Modal
            img={this.state.isModal}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default TodoApp;
