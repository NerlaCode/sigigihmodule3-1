import { Component } from "react";

class Sample extends Component {
  state = { counter: 0 };

  render() {
    return (
      <>
        Counter is {this.state.counter}
        <br />
        <button
          onClick={() => {
            this.setState((prevState) => ({
              counter: prevState.counter - 1
            }));
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              counter: prevState.counter + 1
            }));
          }}
        >
          +
        </button>
      </>
    );
  }
}

export { Sample };
