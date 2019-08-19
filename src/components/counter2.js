import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 2
    };
  }
  climb2(a) {
    let counter = this.state.counter;

    this.setState({ counter: counter + a + 4 });
  }

  render() {
    return (
      <div onClick={() => this.climb2(5)}>
        <h1> Counting 2 - {this.state.counter} </h1>
      </div>
    );
  }
}
