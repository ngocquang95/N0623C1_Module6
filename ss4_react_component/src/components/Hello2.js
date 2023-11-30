import React from "react";

class Hello2 extends React.Component {
  render() {
    return (
      <h1>
        Hello {this.props.name} - {this.props.age}
      </h1>
    );
  }
}

export default Hello2;
