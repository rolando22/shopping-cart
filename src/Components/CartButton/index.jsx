import { AddToCartIcon, RemoveFromCartIcon } from "../Icons";

import './CartButton.css';

function CartButtonAdd({ addToCart }) {
    return (
        <button 
            className='CartButton-add' 
            onClick={addToCart}
        >
            <AddToCartIcon />
            </button>
    );
}

function CartButtonRemove({ removeFromCart }) {
    return (
        <button 
            className='CartButton-remove' 
            onClick={removeFromCart}
        >
            <RemoveFromCartIcon />
        </button>
    );
}

export function CartButton({ isProductInCart, addToCart, removeFromCart }) {
    return isProductInCart ? <CartButtonRemove removeFromCart={removeFromCart} /> : <CartButtonAdd addToCart={addToCart} /> ;
}
