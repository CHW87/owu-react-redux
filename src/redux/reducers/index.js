import {combineReducers} from 'redux'
import counter1reducer from "./counter_one_reduser";
import counter2reducer from "./counter_two_reduser";
export const reducer = combineReducers({
    counter1:counter1reducer,
    counter2:counter2reducer,
})
