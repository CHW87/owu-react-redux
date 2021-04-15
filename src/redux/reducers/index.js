import {combineReducers} from 'redux'
import counter1reducer from "./counter_one_reducer";
import counter2reducer from "./counter_two_reducer";
import userReducer from "./users-reducer";

export const reducer = combineReducers({
    counter1:counter1reducer,
    counter2:counter2reducer,
    userReducer
})
