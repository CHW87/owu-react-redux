import React from "react";

export const Product = ({product, onCartClick, onWishListClick, isInCart, isInWishList}) => (
    <div key={product.id} >
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
        <button
            style={{
                backgroundColor: isInWishList ? 'red' : ''
            }}
            onClick={onWishListClick}
        >
            {isInWishList ? 'remove from wishlist' : 'add to wishlist'}
        </button>
        <button
            style={{
                backgroundColor: isInCart ? 'red' : ''
            }}
            onClick={onCartClick}
        >
            {isInCart ? 'remove from cart' : 'add to cart'}
        </button>
        <div style={{height: '200px'}}>
            <img style={{height: '100%'}} src={product.image} alt=''/>
        </div>
        <hr/>
    </div>
)
