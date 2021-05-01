import React from 'react';
import Square from './Square/Square'
import { useSelector, useDispatch } from 'react-redux'

const Board = (props) => {
    const dispatch = useDispatch();
    const nextMove = useSelector(state => state.boardState.nextMove)
    const squares = useSelector(state => state.boardState.squares)
   
  
    let renderSquare = (i) => {
        return <Square id={i} onClick={ () => handleClick(i) }/>;
    }

    const handleClick = (i) => {
        if(winner || squares[i].value){
            return;
            }
        if(nextMove === 'X') {
                dispatch({
                    type: 'SET_X',
                    id: i
                })
            } else if (nextMove === 'O') {
                dispatch({
                    type: 'SET_O',
                    id: i
                })
            } 
        }
        const winner = calculateWinner(squares);
        let status;

        if(winner === 'ничья'){
            status = 'Победила дружба'
        }else if(winner) {
                status = `Выиграл: ${winner}`
            } else { 
                status = `Следующий ход: ${nextMove}`
             };
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button onClick={ () => dispatch({type: 'SET_NEW_GAME'})}>Новая игра</button>
        </div>
    )
}

const calculateWinner = (squares) => {

    const lines = [
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
      if (squares[a].value  && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
            return squares[a].value
      }
    } 
    const deadHeat = Array.from(new Set(squares.map(s => s.value)))
    if(deadHeat.indexOf(null) === -1){ return 'ничья'}
    return null;
  }
export default Board;
