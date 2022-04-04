import { Component } from "react";

class Sample extends Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <>
        Counter is {this.state.counter}
        <br />
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </>
    );
  }
}

export { Sample };
