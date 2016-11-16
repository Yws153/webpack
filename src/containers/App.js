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


// import React from 'react'
// import { Route, IndexRoute } from 'react-router'
//
// import { App, Home, Lrpz, Cxpz, Kmyeb, Lrb, Zcfzb, Mxb, Jz, AcConfig, SobConfig, AssConfig, Qcye, Boss, Assets, DetailAssets, AssetsMx } from 'app/containers'
//
// import AcOption from 'app/containers/Config/AcConfig/AcOption'
// import SobOption from 'app/containers/Config/SobConfig/SobOption'
// import AssOption from 'app/containers/Config/AssConfig/AssOption'
// import AcRelation from 'app/containers/Config/AcConfig/AcRelation'
// import AcAssets from 'app/containers/Config/AcConfig/AcAssets'
// import AssetsCategory from 'app/containers/Assets/AssetsCategory'
// import AssetsCard from 'app/containers/Assets/AssetsCard'
//
// export default (
//     <Route path="/" component={App}>
//         <IndexRoute component={Home}/>
//         <Route path="lrpz" component={Lrpz}/>
//         <Route path="cxpz" component={Cxpz}/>
//         <Route path="kmyeb" component={Kmyeb}/>
//         <Route path="lrb" component={Lrb}/>
//         <Route path="zcfzb" component={Zcfzb}/>
//         <Route path="mxb" component={Mxb}/>
//         <Route path="jz" component={Jz}/>
//         <Route path="qcye" component={Qcye}/>
// 		<Route path="config">
// 			<Route path="sob" component={SobConfig}/>
// 			<Route path="ac" component={AcConfig}/>
// 			<Route path="ass" component={AssConfig}/>
// 			<Route path="option">
// 				<Route path="sob" component={SobOption}/>
// 				<Route path="ac" component={AcOption}/>
// 				<Route path="ass" component={AssOption}/>
// 			</Route>
// 			<Route path="relation">
// 				<Route path="ac" component={AcRelation}/>
// 			</Route>
//             <Route path="acassets">
// 				<Route path="ac" component={AcAssets}/>
// 			</Route>
// 		</Route>
//         <Route path="boss" component={Boss}/>
//         <Route path="assets">
//             <Route path="assets" component={Assets}/>
//             <Route path="assetsoption">
//                 <Route path="category" component={AssetsCategory}/>
//                 <Route path="card" component={AssetsCard}/>
//             </Route>
//         </Route>
//         <Route path="detailassets" component={DetailAssets}/>
//         <Route path="assetsmx" component={AssetsMx}/>
//     </Route>
// )
