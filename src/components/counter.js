import React from "react";
import Counter2 from "./counter2";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2
    };
  }
  climb() {
    let count = this.state.count;

    this.setState({ count: count + 1 });
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.climb()}> Counting {this.state.count} </h1>
        <Counter2 cc={this.state.count} />
      </div>
    );
  }
}
