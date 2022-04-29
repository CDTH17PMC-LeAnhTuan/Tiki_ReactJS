import * as types from './action-types';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = {
    products: [],
    cart: data ? data : [],
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            // const item = state.products.find(prod => prod.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.product.id ? true : false)
            const a = {
                ...state,
                cart: inCart
                    ? state.cart.map(item => item.id === action.payload.product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item)
                    : [...state.cart, { ...action.payload.product, qty: 1 }],
            };
            localStorage.setItem('CART', JSON.stringify(a.cart));
            return a;
        case types.REMOVE_FROM_CART:
            const b = {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
            localStorage.setItem('CART', JSON.stringify(b.cart));
            return b;
        case types.UPDATE_TO_CART:
            const c = {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)
            }
            localStorage.setItem('CART', JSON.stringify(c.cart));
            return c;
        default: return state;
    }
}
export default products