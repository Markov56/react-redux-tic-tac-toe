import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Square = (props) => {
    const square = useSelector(state => state.boardState.squares[props.id].value);
    const id = useSelector(state => state.boardState.squares[props.id].id)
    const dispatch = useDispatch();
    return (
        <button className="square" id={props.id} onClick={props.onClick} >
           {square}
        </button>
    );
}

export default Square;