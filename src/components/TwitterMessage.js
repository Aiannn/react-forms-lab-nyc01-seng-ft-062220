import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: ''
    };
  }

  changeHandler= (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.changeHandler} type="text" name="message" id="message" value={this.state.searchValue} />
        <span>Chars remains: {this.props.maxChars-this.state.searchValue.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
