import { Component } from "react";

class TodoForm extends Component {
  state = { email: "", password: "" };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const credentials = { ...this.state };
    console.log("credentials", credentials);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Email
          <input
            type='email'
            name='email'
            onChange={this.onInputChange}
            placeholder='Email'
            autoComplete='off'
          />
        </label>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          name='password'
          onChange={this.onInputChange}
          placeholder='Password'
          autoComplete='off'
        />
        <button type='submit'> Add Todo </button>
      </form>
    );
  }
}

export default TodoForm;
