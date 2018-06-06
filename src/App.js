import React, { Component } from 'react';
import Header from './Header';
import GroceryList from './GroceryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GroceryList />
      </div>
    );
  }
}

export default App;
