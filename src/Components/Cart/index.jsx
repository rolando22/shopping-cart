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

    const cartTotal = cart.reduce((subTotal, item) => subTotal + item.price * item.quantity, 0)

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
                <strong>Total -</strong> ${cartTotal}
                <button className='Cart-button-clear' onClick={handleOnClickClearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
}
