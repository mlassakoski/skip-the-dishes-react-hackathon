import product from './product.reducer';
import cart from './cart.reducer';
import order from './order.reducer';
import user from './user.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product,
    cart,
    order,
    user
});

export default rootReducer;