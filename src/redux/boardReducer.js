const SET_X = 'SET_X';
const SET_O = 'SET_O';

let initialState = {
    squares: [],
    nextMove: 'X'
};

for(let i = 0; i<9; i++){
    let squareItem = {
        value: null,
        id: i
    }
    initialState.squares.push(squareItem)
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_X:
           
            return {...state,
            squares: state.squares.map(s => {
                if(s.id === action.id){
                    s.value = 'X'
                }
                return s
            }),
            nextMove: 'O'
        }
        
        case SET_O:
            
            return {...state,
                squares: state.squares.map(s => {
                    if(s.id === action.id){
                        s.value = 'O'
                    }
                    return s
                }),
                nextMove: 'X'
            }  
       
        default:
            return state;
    }
         
 }

 export default boardReducer;