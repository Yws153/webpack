import { combineReducers } from 'redux'
import counterhandle from './counter'
import counterState from './counter'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counterhandle: counterState
})

export default rootReducer