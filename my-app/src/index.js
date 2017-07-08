import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// functional Component
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {



  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)} />
    );
  }

  render() {


    return (
      <div>
        <div className="status"> {/* status */} </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(){
    super();
    this.state={
      history : [{
        squares : Array(9).fill(null),
      }],
      stepNumber : 0,
      xIsNext : true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const squares = history[history.length-1].squares;
    if(calculateWinner(squares)){
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history : history.concat({squares: newSquares}),
      xIsNext : !this.state.xIsNext,
      stepNumber : history.length,
    });
  }

  jumpToMove(i) {
    this.setState({
      xIsNext : i%2 === 0,
      stepNumber : i,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber].squares;
    const winner = calculateWinner(current);
    let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    if(winner) {
      status = 'Winner is : ' + winner;
    }

    const moves = history.map((currentSquare, index) => {
      const move = index ? 'Move # : ' + (index) : 'Game Start';
      return (
        <li key={index}>
          <a href="#" onClick={() => this.jumpToMove(index)}> {move} </a>
        </li>
      );
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board
          onClick={i => this.handleClick(i)}
          squares={current} />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }


}


function calculateWinner(squares) {
  let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];

    }
  }

  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
