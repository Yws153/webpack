import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default function configureStore(rootReducer) {

    let buildStore = compose(
       	applyMiddleware(thunk),
       	window.devToolsExtension ? window.devToolsExtension() : f => f
   	)(createStore);

   	const store = buildStore(rootReducer);

  	//热替换选项
  	if (module.hot) {

    	// Enable Webpack hot module replacement for reducers
    	module.hot.accept(rootReducer, () => {
      		const nextReducer = require(rootReducer)
      		store.replaceReducer(nextReducer)
    	})
  	}
  	return store
}
