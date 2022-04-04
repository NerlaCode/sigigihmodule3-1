import { Component } from "react";

class Sample extends Component {
  state = { text: "" };

  handleInput = (e) => this.setState({ text: e.target.value });

  render() {
    const { text } = this.state;
    return (
      <>
        <input onChange={this.handleInput} />
        <p>The input above will be reflected below</p>
        <p>{text}</p>
      </>
    );
  }
}

export { Sample };
