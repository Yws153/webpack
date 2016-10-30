import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter.js'
import * as CounterActions from '../actions/counter.action.js'



//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(CounterActions, dispatch) }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)


// MessageBox = connect(state => state, dispatch => ({
// 	actions: bindActionCreators(Actions, dispatch)
// }))(MessageBox);

// const Store = customStore(rootReducer);
