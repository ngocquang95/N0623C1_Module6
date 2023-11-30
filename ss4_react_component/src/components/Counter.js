import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    // GIá trị khởi tạo
    this.state = { counter: 10 };
    console.dir(this);
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  
  render() {
    debugger
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleDecrement} className="btn btn-danger mx-2">-</button>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary"
        >
          +
        </button>
      </>
    );
  }
}

export default Counter;
