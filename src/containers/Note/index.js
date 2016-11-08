"use strict";
// import React from "react";
// import {ReactDOM} from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import createLogger from "redux-logger";
// import { Provider } from "react-redux";
// import Notes from "./container/app.jsx";
// import rootReducer from "./reducer/reducer.jsx";

// var loggerMiddleware = createLogger();

// //创建携带所传入中间件的store
// var createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

// var store = createStoreWithMiddleware(rootReducer);

// //监听state的每一次变化，若调用所返回函数unsubscribe( )，则监听取消
// var unsubscribe = store.subscribe( () => console.log(store.getState()) );

// var rootElement = document.getElementById("app");
// {ReactDOM}.render(
// 	<Provider store = { store }>
// 		<Notes/>
// 	</Provider>,
// 	rootElement
// );



import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Notes from './app.js'
import * as NoteActions from '../../actions/note.action.js'
import configureStore from '../../store/configureStore.js'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    noteState: state.noteState
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(NoteActions, dispatch)}
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
const App = connect(mapStateToProps, mapDispatchToProps)(Notes)
const store = configureStore()

render(
  	<Provider store={store}>
    	<App />
  	</Provider>,
  	document.getElementById('content')
)
