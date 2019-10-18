import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import BaseReducer from "./BaseReducer";
import {CLEAR_REDUCER_INFO} from "./ReduxActionsTypes";

/**
 * Creates the Redux Store with a default base reducer
 */

const defaultReducers = {
	base: BaseReducer,
};

const createRootReducerWithSugar = (asyncReducers = {}) => {
	return (state, action) => {
		if (action.type === CLEAR_REDUCER_INFO) {
			if (state[action.reducer]) {
				state = {...state};

				if (!Array.isArray(action.dataTarget))
					action.dataTarget = [action.dataTarget];

				action.dataTarget.forEach(field => {
					state[action.reducer][field] = action.cleanValue;
				});
			} else {
				console.error(`[CLEAR_REDUCER_DATA] The given reducer '${action.reducer}' doesn't exists. Current existing reducers are: ${Object.keys(state)}`)
			}
		}

		return combineReducers({...defaultReducers, ...asyncReducers})(state, action);
	};
};


const createAppropriateStore = createStore;
const reduxStore = createAppropriateStore(createRootReducerWithSugar(), applyMiddleware(thunk));
reduxStore.asyncReducers = {};


const registerReducer = (name, reducer) => {
	if (!reduxStore.asyncReducers[name]) {
		console.debug(`Registering Lazy Reducer ${name} ...`);
		reduxStore.asyncReducers[name] = reducer;
		reduxStore.replaceReducer(createRootReducerWithSugar(reduxStore.asyncReducers));
		console.debug(`Lazy Reducer ${name} registered!`);
	}
};

export default {
	store: reduxStore,
	getState: reduxStore.getState,
	dispatch: reduxStore.dispatch,
	registerReducer
};
