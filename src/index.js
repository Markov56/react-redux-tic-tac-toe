//попробовать через метод connect
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Board from './components/Board/Board'
import store from './redux/store'

// import store from './redux/store'

const Game = (props) => {
 
    return (
        
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            { <div className="game-info">
                <div>{/* status*/}</div>
                <ol>{/* TODO*/}</ol>
            </div> }
        </div>
    );
}
  // ========================================
  
  ReactDOM.render(
   <Provider store={store}>
    <Game />
    </Provider>,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
      const lines =  [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
          }
      }
      return null;
  }




