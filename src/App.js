import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount(){
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    });
  }

  decrementCount(){
    this.setState((prevState) => {
      return {count: prevState.count - 1}
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

export default App;
