import React, { Component } from 'react';
import Square from './Square';
import "./App.css";

class App extends Component {
  state = {
    board: ["", "", "",
            "", "", "",
            "", "", ""],
    turn: "X"
  }
  updateBoard(i){
    const board = this.state.board.slice();
    const turn = this.state.turn;
    if(board[i]===""){
      board[i] = turn;
    }
    this.setState({
      board,
      turn: turn === "O" ? "X" : "O"
    })
  }

  playerWon() {
    const board = this.state.board;
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // determining if someone won
    for(let i = 0; i < winningConditions.length; i++){
      const [a, b, c] = winningConditions[i];
      if(board[a] !== "" &&
         board[a] === board[b] &&
         board[b] === board[c])
      {
        return board[winningConditions[i][0]]
      }
    }
    // check if board is full
    let isBoardFull = true;
    for(let i = 0; i < board.length; i++){
      if( board[i] === "" ){
        isBoardFull = false;
      }
    }
    if(!isBoardFull){
      // if no one won and the board is not full, game continues
      return ""
    } else {
      // if no one won when the board is full, it is a tie
      return "tie";
    }
  }
  render() {
    const board = this.state.board;

    return (
      <div>
        <h1>{this.playerWon()}</h1>
        <div>
          <Square value={board[0]} handleClick={this.updateBoard.bind(this, 0)}/>
          <Square value={board[1]} handleClick={this.updateBoard.bind(this, 1)}/>
          <Square value={board[2]} handleClick={this.updateBoard.bind(this, 2)}/>
        </div>
        <div>
          <Square value={board[3]} handleClick={this.updateBoard.bind(this, 3)}/>
          <Square value={board[4]} handleClick={this.updateBoard.bind(this, 4)}/>
          <Square value={board[5]} handleClick={this.updateBoard.bind(this, 5)}/>
        </div>
        <div>
          <Square value={board[6]} handleClick={this.updateBoard.bind(this, 6)}/>
          <Square value={board[7]} handleClick={this.updateBoard.bind(this, 7)}/>
          <Square value={board[8]} handleClick={this.updateBoard.bind(this, 8)}/>
        </div>
      </div>
    )
  }
}

export default App;
