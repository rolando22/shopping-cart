import { useId } from 'react';

import { CartItem, CartIcon, ClearCartIcon } from './../';

import { useCart } from '../../hooks/useCart';

import './Cart.css';

export function Cart() {
    const { cart, addToCart, removeQuantityFromCart, clearCart } = useCart();
    const cartCheckboxId = useId();

    const handleAddToCart = (item) => () => addToCart(item);
    const handleRemoveFromCart = (item) => () => removeQuantityFromCart(item);
    const handleOnClickClearCart = () => clearCart();

    return (
        <>
            <label 
                htmlFor={cartCheckboxId} 
                className='Cart-button'
            >
                <CartIcon />
            </label>
            <input 
                type='checkbox' 
                id={cartCheckboxId} 
                hidden 
            />
            <aside className='Cart'>
                <ul>
                    {cart.map(item => 
                        <CartItem 
                            key={item.id}
                            thumbnail={item.thumbnail}
                            price={item.price}
                            title={item.title}
                            quantity={item.quantity}
                            addToCart={handleAddToCart(item)}
                            removeFromCart={handleRemoveFromCart(item)}
                        />
                    )}
                </ul>
                <button onClick={handleOnClickClearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
}
