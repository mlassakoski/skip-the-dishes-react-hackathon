import {
    SIGNED_IN
} from '../actions/user.action';

const initState = {
    email: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGNED_IN: {
            return {
                ...state,
                email: action.email
            };
        }
        default: {
            return state;
        }
    }
}

export default userReducer;
