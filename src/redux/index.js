import {applyMiddleware, createStore} from "redux";
import {reducer} from './reducers'
import {
    INC,
    INC_CUSTOM,
    DEC,
    RESET,
} from './action-types'
import thunk from "redux-thunk";
import {endProductsLoading, setProducts, startProductsLoading} from "./action-creators";

const logger = (store) => (next) => (action) => {
    console.log(action);
    const result = next(action)

    console.log('next state', store.getState());
    return result
}

const protectCounter = (store) => (next) => (action) => {
    const actionsForCounter = [
        INC,
        INC_CUSTOM,
        DEC,
        RESET,
    ]
    const {isAllowedToChange} = store.getState().counter1
    if (!isAllowedToChange && actionsForCounter.includes(action.type)) {
        console.log('you are not allowed to modify counter');
        return
    }
    next(action)
}

const persister = (store) => (next) => (action) => {
    next(action)

    const {wishlist, cart} = store.getState()
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    localStorage.setItem('cart', JSON.stringify(cart))
}

// const customThunk = (store) => (next) => (action) => {
//     if(typeof action === 'function'){
//         action(store.dispatch)
// } else {
//         next(action)
//     }
// }

const middleWares = [thunk, protectCounter,logger,persister];

// const middleWares = [thunk,protectCounter,/*logger,*/persister];

export const store = createStore(
    reducer,
    applyMiddleware(...middleWares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

    
