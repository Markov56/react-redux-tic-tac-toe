const SET_X = 'SET_X';
const SET_O = 'SET_O';
const SET_NEW_GAME = 'SET_NEW_GAME';

 
let initialState = {
    squares: [
        {value: null, id: 0},
        {value: null, id: 1},
        {value: null, id: 2},
        {value: null, id: 3},
        {value: null, id: 4},
        {value: null, id: 5},
        {value: null, id: 6},
        {value: null, id: 7},
        {value: null, id: 8},
    ],
    nextMove: 'X'
};



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

        case SET_NEW_GAME: 
                console.log(initialState)
            return {...initialState,
                squares: [
                    {value: null, id: 0},
                    {value: null, id: 1},
                    {value: null, id: 2},
                    {value: null, id: 3},
                    {value: null, id: 4},
                    {value: null, id: 5},
                    {value: null, id: 6},
                    {value: null, id: 7},
                    {value: null, id: 8},
                ]
            }
                
            
       
        default:
            return state;
    }
         
 }

 export default boardReducer;