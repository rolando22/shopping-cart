export const cartInitialState = [];

export const cartTypesActions = {
    addToCart: 'ADD_TO_CART',
    removeQuantityFromCart: 'REMOVE_QUANTITY_FROM_CART',
    removeFromCart: 'REMOVE_FROM_CART',
    clearCart: 'CLEAR_CART',
};

const cartReducerObject = (state, payload) => ({
    [cartTypesActions.addToCart]: () => {
        const productCartIndex = state.findIndex(item => item.id === payload.id);
        if (productCartIndex >= 0) {
            const newState = structuredClone(state);
            newState[productCartIndex].quantity += 1;
            return newState;
        }
        const newState = [
            ...state,
            {
                ...payload,
                quantity: 1,
            }
        ];
        return newState;
    },
    [cartTypesActions.removeQuantityFromCart]: () => {
        const productCartIndex = state.findIndex(item => item.id === payload.id);
        if (state[productCartIndex].quantity === 1) 
            return cartReducerObject(state, payload.id)[cartTypesActions.removeFromCart]();
        const newState = structuredClone(state);
        newState[productCartIndex].quantity -= 1;
        return newState;
    },
    [cartTypesActions.removeFromCart]: () => {
        const newState = state.filter(item => item.id !== payload);
        return newState;
    },
    [cartTypesActions.clearCart]: () => [],
});

export const cartReducer = (state, action) => {
    return cartReducerObject(state, action.payload)[action.type]() || state
}
