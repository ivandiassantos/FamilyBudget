import {REGISTER} from "../misc/ReduxActionsTypes"

const defaultState = {
    registerSuccess: false,
};

export default(state = defaultState, action) =>{
    switch(action.type){
        case REGISTER:
            return {
                ...state,
                registerSuccess: true,
            }
        default:
            return state;
    }
}