import { compose, createStore, applyMiddleware }	from 'redux';
import thunk from 'redux-thunk';


export default function customStore(rootReducer) {
	let buildStore = compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore);

	const store = buildStore(rootReducer);

	if(module.hot) {
		module.hot.accept(rootReducer, () => {
			store.replaceReducer(rootReducer);
		});
	}
	return store;
}

// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from '../reducers'
//
// //使用redux的combineReducers方法将所有reducer打包起来
// // const rootReducer = combineReducers({
// //   counter
// // })
//
//
// //applyMiddleware来自redux可以包装 store 的 dispatch
// //thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
// const createStoreWithMiddleware = applyMiddleware(
//   thunk
// )(createStore)
//
// export default function configureStore(initialState) {
//   const store = createStoreWithMiddleware(rootReducer, initialState)
//
//   //热替换选项
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers/counter.js', () => {
//       const nextReducer = require('../reducers/counter.js')
//       store.replaceReducer(nextReducer)
//     })
//   }
//
//   return store
// }
// // import { compose, createStore, applyMiddleware } from 'redux';
// // import rootReducer from '../reducers/counter.js';
// // import thunk from 'redux-thunk';
//
//
//
// // let buildStore = compose(
// //   applyMiddleware(thunk),
// //     window.devToolsExtension ? window.devToolsExtension() : f => f
// // )(createStore);
//
// // const store = buildStore(rootReducer);
//
// // if(module.hot) {
// //     module.hot.accept('../reducers/counter.js', () => {
// //         store.replaceReducer(require('../reducers/counter.js'));
// //     });
// // }
//
// // export default store;
