import {
    ADD_CART,
    REMOVE_CART,
    CLEAR_CART
} from '../actions/cart.action';

const initState = {
    cart: []
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_CART: {
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        }
        case REMOVE_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.item.id)
            };

        }
        case CLEAR_CART: {
            return {
                ...state,
                cart: []
            }
        }
        default:
            return state;
    }
}

export default cartReducer;
