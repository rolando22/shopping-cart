import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const productCartIndex = cart.findIndex(item => item.id === product.id);
        if (productCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productCartIndex].quantity += 1;
            return setCart(newCart);
        }
        setCart(prevState => [
            ...prevState,
            {
                ...product,
                quantity: 1,
            }
        ]);
    };

    const removeQuantityFromCart = product => {
        const productCartIndex = cart.findIndex(item => item.id === product.id);
        if (cart[productCartIndex].quantity === 1) return removeFromCart(product.id);
        const newCart = structuredClone(cart);
        newCart[productCartIndex].quantity -= 1;
        setCart(newCart);
    };

    const removeFromCart = (productId) => {
        const newCart = cart.filter(item => item.id !== productId);
        setCart(newCart);
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeQuantityFromCart,
            removeFromCart, 
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}
