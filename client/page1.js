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

render(
  	<Provider store={store}>
        <Router history={history} routes={routes}/>
  	</Provider>,
  	document.getElementById('content')
)
