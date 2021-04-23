import {applyMiddleware, createStore} from "redux";
import {reducer} from './reducers'
import thunk from "redux-thunk";

const logger = (store) => (next) => (action) => {
    console.log(action);
    const result = next(action)

    console.log('next state', store.getState());
    return result
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

const middleWares = [thunk,logger,persister];

export const store = createStore(
    reducer,
    applyMiddleware(...middleWares)
)
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    
