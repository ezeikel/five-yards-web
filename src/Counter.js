import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  count = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.count} data-testid="counter-button">{this.state.count}</button>
      </div>
    );
  }
}

export default Counter;