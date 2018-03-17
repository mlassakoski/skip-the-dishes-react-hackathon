import {
    ADD_CART,
    REMOVE_CART,
    CLEAR_CART
} from '../actions';

function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_CART:
            let product = [...state, action.item];
            return product;
        case REMOVE_CART:
            product = state.filter(item => item.id !== action.item.id);
            return product;
        case CLEAR_CART:
            product = [];
            return product;
        default:
            return state;
    }
}

export default cartReducer;