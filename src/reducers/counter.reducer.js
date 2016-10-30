import * as ActionTypes from '../constants/ActionTypes.js'
import { fromJS } from 'immutable'

const initState = fromJS({
    conter : 0
})

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = initState, action) {
  	return ({
		[ActionTypes.INCREMENT_COUNTER]             : () => state.update('conter', v => v + 1),
		[ActionTypes.DECREMENT_COUNTER] 			: () => state.update('conter', v => v - 1)
	}[action.type] || (() => state))();
}
