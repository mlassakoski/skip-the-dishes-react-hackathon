import {
    ADD_ORDER,
    REMOVE_ORDER
} from '../actions/order.action';

const initState = {
    order: []
}

const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ORDER: {
            let total = 0;
            action.item.cart.map(i => total += i.price);
            const order = {
                id: Math.random(),
                orderItems: action.item,
                total: total
            }
            return {
                ...state,
                order: [...state.order, order]
            };

        }
        case REMOVE_ORDER: {
            return {
                ...state,
                order: state.filter(item => item.id !== action.item.id) 
            }
        }
        default:
            return state;
    }
}

export default orderReducer;