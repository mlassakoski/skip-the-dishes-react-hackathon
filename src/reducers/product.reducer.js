import {
    LOAD_PRODUCT
} from '../actions/product.action';

const initState = {
    product: []
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT: {
             return {
                 ...state,
                 product: action.items 
             }   
        }
        default: {
            return state;
        }
    }
}

export default productReducer;