import { combineReducers } from 'redux'
import handlecounter from './counter.reducer.js'

//使用redux的combineReducers方法将所有reducer打包起来
export default combineReducers({
    homeState: handlecounter
})
