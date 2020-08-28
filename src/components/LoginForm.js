import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  submitHandler = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password)
    return this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
        <div>
          <label>
            Username
            <input onChange={this.changeHandler} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changeHandler} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
