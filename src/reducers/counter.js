import * as ActionTypes from '../constants/ActionTypes.js'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = 0, action) {
  	return ({
		[ActionTypes.INCREMENT_COUNTER]             : () => state + 1,
		[ActionTypes.DECREMENT_COUNTER] 			: () => state - 1
	}[action.type] || (() => state))();
}