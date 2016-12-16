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
