import { useReducer } from "react";
import { cartInitialState, cartReducer, cartTypesActions } from "../reducers/cart";

export function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = product => {
        dispatch({ type: cartTypesActions.addToCart, payload: product });
    };

    const removeQuantityFromCart = product => {
        dispatch({ type: cartTypesActions.removeQuantityFromCart, payload: product });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: cartTypesActions.removeFromCart, payload: productId });
    };

    const clearCart = () => dispatch({ type: cartTypesActions.clearCart });

    return {
        state,
        addToCart,
        removeQuantityFromCart,
        removeFromCart,
        clearCart,
    };
}
