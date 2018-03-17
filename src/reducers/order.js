import {
    ADD_ORDER,
    REMOVE_ORDER
} from '../actions';

function orderReducer(state = [], action) {
    switch (action.type) {
        case ADD_ORDER:
            let total = 0;
            action.item.map(i => total += i.price);
            const order = {
                id: Math.random(),
                orderItems: action.item,
                total: total
            }
            let product = [...state, order];
            return product;
        case REMOVE_ORDER:
            product = state.filter(item => item.id !== action.item.id);
            return product;
        default:
            return state;
    }
}

export default orderReducer;