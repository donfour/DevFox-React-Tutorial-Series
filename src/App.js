import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: "",
      valid: false
    }
    this.processInput = this.processInput.bind(this)
  }
  processInput(){
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        {this.state.valid ? "Valid Password!" : "Invalid Password!"}
          <input
            type="text"
            value={this.state.value}
            onChange={(e)=>{
              const value = e.target.value;
              let valid;
              if(value.length >= 8 && value.replace(/[^A-Z]/g, "").length >= 1){
                valid = true;
              } else {
                valid = false;
              }
              this.setState({
                value,
                valid
              })
            }}
          />
        <button onClick={this.processInput}>Submit</button>
      </div>
    );
  }
}

export default App;
