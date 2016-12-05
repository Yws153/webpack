import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import configureStore from './store/configureStore.js'


import homeState from './reducers/counter.reducer.js'
import noteState from './reducers/note.reducer.js'
// import * as reducers from './reducers'
import { combineReducers } from 'redux'

import routes from './routes'
import { Router, useRouterHistory, hashHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { createHistory } from 'history'
// import createBrowserHistory from 'history/lib/createBrowserHistory'

const rootReducer = combineReducers({
    homeState,
    noteState,
    routing: routerReducer
})
const store = configureStore(rootReducer)

export const history = syncHistoryWithStore(hashHistory, store)

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// const App = connect(state => state, (dispatch) => { return {actions: bindActionCreators(CounterActions, dispatch)}})(Counter)

render(
  	<Provider store={store}>
        <Router history={history} routes={routes}/>
  	</Provider>,
  	document.getElementById('content')
)

//
// import React from 'react'
// import { render } from 'react-dom'
// import { combineReducers } from 'redux'
// import { Provider } from 'react-redux'
// import { Router, useRouterHistory, hashHistory } from 'react-router'
// import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
// import { createHistory } from 'history'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import { customStore, browserNavigator } from './utils'
// import routes from './routes'
// import * as ActionTypes from 'app/constants/ActionTypes'
// import * as reducers from './reducers'
// import FastClick from 'fastclick'
//
// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', () => {
//         FastClick.attach(document.body)
//     }, false)
// }
//
// const store = customStore(combineReducers({
//     ...reducers,
//     routing: routerReducer
// }))
//
// export const history = syncHistoryWithStore(hashHistory, store)
// // export const history = syncHistoryWithStore(withScroll(hashHistory), store)
// //useRouterHistory(createHistory)({basename: '/build/app/index.html'})
//
// var div = document.createElement('div')
// div.id = 'root'
// document.body.appendChild(div)
//
// window.onerror = (errMsg, url, lineNumber) => {
// 	const text = `Error: ${errMsg}`
// 	if (browserNavigator.versions.DingTalk)
// 		alert(text)
// }
//
// render(
//     <Provider store={store}>
//         <Router history={history} routes={routes}/>
//     </Provider>,
//     document.getElementById('root')
// )
