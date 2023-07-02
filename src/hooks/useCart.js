import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export function useCart() {
    const cart = useContext(CartContext);

    if (cart === undefined) throw new Error('useCart debe usarse dentro de un CartProvider ');

    return cart;
}
