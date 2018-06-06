import React, { Component } from 'react';
import Header from './Header';
import GroceryList from './GroceryList';

const mondayList = [{
                     key: "1",
                     name: "Bread"
                    },
                    {
                      key: "2",
                      name: "Peanut Butter"
                    },
                    {
                      key: "3",
                      name: "Jelly"
                    }]

const tuesdayList = [{
                      key: "4",
                      name: "Cereal"
                     },
                     {
                      key: "5",
                      name: "Cup noodles"
                     }]

const wednesdayList = [{
                       key: "6",
                       name: "Beer"
                       }]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GroceryList dayOfWeek={"Monday"} data={mondayList} />
        <GroceryList dayOfWeek={"Tuesday"} data={tuesdayList} />
        <GroceryList dayOfWeek={"Wednesday"} data={wednesdayList} />
      </div>
    );
  }
}

export default App;
