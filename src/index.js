import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from './containers/Home/app.js'
import * as CounterActions from './actions/counter.action.js'
import configureStore from './store/configureStore.js'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    homeState: state.homeState
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(CounterActions, dispatch) }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
const App = connect(mapStateToProps, mapDispatchToProps)(Counter)
const store = configureStore()

render(
  	<Provider store={store}>
    	<App />
  	</Provider>,
  	document.getElementById('content')
)

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import routes from './routes'
// import { Router, useRouterHistory, hashHistory } from 'react-router'
// import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
// import { combineReducers } from 'redux'
// import * as reducers from './reducers'
// import { fromJ, toJS } from 'immutable'
//
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import Counter from './containers/Home/app.js'
// import * as CounterActions from './actions/counter.action.js'
// import * as ActionTypes from './constants/ActionTypes'
// import customStore from './store/configureStore.js'
//
// // console.log(reducers)
//
// const store = customStore(combineReducers({
//     ...reducers,
//     routing: routerReducer
// }))
//
// export const history = syncHistoryWithStore(hashHistory, store)
// //
// // {
// // 	"presets": ["react", "es2015", "stage-2"],
// // 	"plugins": ["transform-decorators-legacy"],
// //     "env": {
// //         "development": {
// //             "presets": ["react-hmre"]
// //         }
// //     }
// // }
//
// // "plugins": ["transform-decorators-legacy"]
// //将state.counter绑定到props的counter
// // function mapStateToProps(state) {
// //   return {
// //     homeState: state.homeState
// //   }
// // }
// //将action的所有方法绑定到props上
// // function mapDispatchToProps(dispatch) {
// //   return { actions: bindActionCreators(CounterActions, dispatch) }
// // }
//
// //通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// // const App = connect(mapStateToProps, mapDispatchToProps)(Counter)
//
// render(
//   	<Provider store={store}>
//     	{/* <App /> */}
//         <Router history={history} routes={routes}/>
//   	</Provider>,
//   	document.getElementById('content')
// )

/*"env": {
    "development": {
        "presets": ["react-hmre"]
    }
}*/

//
//
//
//
// import { createHistory } from 'history'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import { customStore, browserNavigator } from './utils'

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
