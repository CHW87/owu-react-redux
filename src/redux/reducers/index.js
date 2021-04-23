import {combineReducers} from 'redux'
import productsReducer from "./products_reducer";
import cartReducer from "./cart_reducer";
import wishlistReducer from "./wishlist_reducer";

export const reducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
})
