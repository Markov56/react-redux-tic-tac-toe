import { createStore, applyMiddleware, combineReducers } from 'redux';
import boardReducer from './boardReducer'


let reducers = combineReducers({
    
    boardState: boardReducer

})

let store = createStore(reducers);

window.store = store;

export default store;
 





