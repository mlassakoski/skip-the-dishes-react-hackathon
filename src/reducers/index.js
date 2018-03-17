import productReducer from './product';
import cartReducer from './cart';
import orderReducer from './order';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    orderReducer
});

export default rootReducer;