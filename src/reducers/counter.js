import * as ActionTypes from '../constants/ActionTypes.js'

export const counterState = {
	counter: 0
}
	


//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export function counterhandle(state = counterState, action) {
  	return ({
		[ActionTypes.INCREMENT_COUNTER]             : () => state + 1,
		[ActionTypes.DECREMENT_COUNTER] 			: () => state - 1
	}[action.type] || (() => state))();
}