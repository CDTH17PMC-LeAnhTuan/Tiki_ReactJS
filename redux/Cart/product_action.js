import * as types from './action-types';

export const addToCart = (product) => {
    return {
        type: types.ADD_TO_CART,
        payload: {
            product: product
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: types.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const updateToCart = (itemId, qty) => {
    return {
        type: types.UPDATE_TO_CART,
        payload: {
            id: itemId,
            qty
        }
    }
}
