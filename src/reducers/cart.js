export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export const cartTypesActions = {
    addToCart: 'ADD_TO_CART',
    removeQuantityFromCart: 'REMOVE_QUANTITY_FROM_CART',
    removeFromCart: 'REMOVE_FROM_CART',
    clearCart: 'CLEAR_CART',
};

const saveLocalStorage = state => localStorage.setItem('cart', JSON.stringify(state));

const cartReducerObject = (state, payload) => ({
    [cartTypesActions.addToCart]: () => {
        const productCartIndex = state.findIndex(item => item.id === payload.id);
        if (productCartIndex >= 0) {
            const newState = structuredClone(state);
            newState[productCartIndex].quantity += 1;
            saveLocalStorage(newState);
            return newState;
        }
        const newState = [
            ...state,
            {
                ...payload,
                quantity: 1,
            }
        ];
        saveLocalStorage(newState);
        return newState;
    },
    [cartTypesActions.removeQuantityFromCart]: () => {
        const productCartIndex = state.findIndex(item => item.id === payload.id);
        if (state[productCartIndex].quantity === 1) 
            return cartReducerObject(state, payload.id)[cartTypesActions.removeFromCart]();
        const newState = structuredClone(state);
        newState[productCartIndex].quantity -= 1;
        saveLocalStorage(newState);
        return newState;
    },
    [cartTypesActions.removeFromCart]: () => {
        const newState = state.filter(item => item.id !== payload);
        saveLocalStorage(newState);
        return newState;
    },
    [cartTypesActions.clearCart]: () => {
        saveLocalStorage([]);
        return [];
    },
});

export const cartReducer = (state, action) => {
    return cartReducerObject(state, action.payload)[action.type]() || state
}
