import * as ActionTypes from '../constants/ActionTypes.js'
import { fromJS } from 'immutable'
import { combineReducers } from 'redux';


const counterState = fromJS({
	counter: 0
})
	


//reducer其实也是个方法而已,参数是state和action,返回值是新的state
function counterhandle(state = counterState, action) {
  	return ({
		[ActionTypes.INCREMENT_COUNTER]             : () => state.get('counter') + 1,
		[ActionTypes.DECREMENT_COUNTER] 			: () => state.get('counter') - 1
	}[action.type] || (() => state))();
}

const rootReducer = combineReducers({
  counterState: counterhandle
})

export default rootReducer