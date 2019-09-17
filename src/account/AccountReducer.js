<<<<<<< HEAD
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
=======
const defaultState = {};

export default(state = defaultState, action) =>{
    switch(action.type){
>>>>>>> 80ea3bc7be412c1973e7fb2ec3f6896a15f829db
        default:
            return state;
    }
}