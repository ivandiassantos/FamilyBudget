import {CLEAR_REDUCER_INFO} from "./ReduxActionsTypes";
import ReduxStore from "./ReduxStore";

const clearReducerData = (reducer, dataTarget, cleanValue = undefined) => {
	ReduxStore.dispatch({
		type: CLEAR_REDUCER_INFO,
		reducer,
		dataTarget,
		cleanValue
	});
};

export default {
	clearReducerData
}
