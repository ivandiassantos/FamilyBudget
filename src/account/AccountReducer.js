import {REGISTER, AUTHENTICATE} from "../misc/ReduxActionsTypes"

const defaultState = {
    registerSuccess: false,
    loginSuccess: false,
};

export default(state = defaultState, action) =>{
    switch(action.type){
        case REGISTER:
            return {
                ...state,
                registerSuccess: true,
            }
        case AUTHENTICATE:
            return {
                ...state,
                loginSuccess: true,
            }
        default:
            return state;
    }
}