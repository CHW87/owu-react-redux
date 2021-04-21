import React,{useEffect,useMemo} from "react";
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {
    // startProductsLoading,
    // endProductsLoading,
    // setProducts, 
    loadProducts,
} from './redux/action-creators/products_action_creators'
import { toggleItemInCart} from './redux/action-creators/cart_action_creators'
import { toggleItemInWishlist} from './redux/action-creators/wishlist_action_creators'

const Header = () => {
    const {products, isLoading} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    
    const calculatedCartSum = useMemo(() => {
        return products
            .filter(el => productsInCart.includes(el.id))
            .reduce((acc,el)=> acc+=el.price,0)
    },[
        products,productsInCart
    ]);
    
    const calculatedWishlistSum = useMemo(() => {
        return products
            .filter(el => productsInWishlist.includes(el.id))
            .reduce((acc,el)=> acc+=el.price,0)
    },[
        products,productsInWishlist
    ]);
    
    return(
        <header>
            <h2>Header</h2>
            <div className='counters'>
                <span>
                    wishlist:{productsInWishlist.length} ($ {calculatedWishlistSum}) 
                </span>
                
                
                <span>
                    cart: {productsInCart.length} ($ {calculatedCartSum})
                </span>
            </div>
        </header>
    )
}

const Products = () => {
    const {products, isLoading} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    console.log({products, isLoading});
    const dispatch = useDispatch()
    
    React.useEffect(()=>{
        dispatch(loadProducts());
    },[])
    return (
        <div className='product-wrapper'>
            {isLoading &&(
            <h1 style={{color:'red'}}>LOADING</h1>
                )}
            {!isLoading && !!products.length && products.map (el => (
                <div key = {el.id} className='product-item'>
                    <h3>{el.title}</h3>
                    <h4>{el.price}</h4>
                    <h4>{el.description}</h4>
                    <button  
                        style = {{
                            backgroundColor: productsInWishlist.includes(el.id) ? 'red' : ''
                        }}
                        onClick={()=>dispatch(toggleItemInWishlist(el.id))}
                    >
                        {productsInWishlist.includes(el.id) ?'remove from wishlist': 'add to wishlist'}
                    </button>
                    <button 
                        style = {{
                            backgroundColor: productsInCart.includes(el.id) ? 'red' : ''
                        }}
                        onClick={()=>dispatch(toggleItemInCart(el.id))}
                    >
                        {productsInCart.includes(el.id) ?'remove from cart': 'add to cart'}
                    </button>
                    <img style ={{width: '100%'}} src={el.image} alt=''/>
                    <hr/>
                </div>
            ))}    
        </div>
    )
}


function App() {
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })

    const dispatch = useDispatch()
    return (
        <div className="App">
            <Header/>
            <Products/>
            {/*{!!(counter1 % 2) && <PhotosList/>}*/}
            {/*<h1>{counter1}-1</h1>*/}
            {/*<button onClick={() => dispatch(incCustomAction(102))}>inc custom</button>*/}
            {/*<button onClick={() => dispatch(incAction())}>inc</button>*/}
            {/*<button onClick={() => dispatch(decAction())}>dec</button>*/}
            {/*<button onClick={() => dispatch(resetAction())}>reset</button>*/}
            {/*<h1>{counter2}-2</h1>*/}
            {/*<button onClick={() => dispatch(incCustomAction_two(10))}>inc custom</button>*/}
            {/*<button onClick={() => dispatch(incAction_two())}>inc</button>*/}
            {/*<button onClick={() => dispatch(decAction_two())}>dec</button>*/}
            {/*<button onClick={() => dispatch(resetAction_two())}>reset</button>*/}
        </div>
    );
}

export default App;
