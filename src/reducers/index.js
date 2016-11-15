
// import { combineReducers } from 'redux'
// import counter from './counter'
// import counterState from './counter'

// //使用redux的combineReducers方法将所有reducer打包起来
// const rootReducer = combineReducers({
//   counter: counterState
// })

// export default rootReducer

import { combineReducers } from 'redux'
import handlecounter from './counter.reducer.js'
import handlenote from './note.reducer.js'

//使用redux的combineReducers方法将所有reducer打包起来
export default combineReducers({
    homeState: handlecounter,
    noteState: handlenote
})
