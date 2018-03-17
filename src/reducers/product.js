import {
    PRODUCT
} from '../actions';

function productReducer(state = [], action) {
    switch (action.type) {
        case PRODUCT:
            return action.items;
        default:
            return state;
    }
}

export default productReducer;