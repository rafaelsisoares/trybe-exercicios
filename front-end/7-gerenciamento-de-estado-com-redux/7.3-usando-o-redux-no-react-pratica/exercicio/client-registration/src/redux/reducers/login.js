import { LOGIN } from "../actions";


const INITIAL_STATE = {
    login: false,
}

function loginReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                login: true,
            };
        default:
            return state;
    }
}

export default loginReducer;