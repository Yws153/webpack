import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import { Link } from 'react-router'
import * as CounterActions from '../../actions/counter.action.js'
// import  from 'src/index.js'

@connect(state => state)
class Counter extends Component {
  	render() {
		const { homeState, dispatch, history } = this.props;

		return <p>
			Clicked: {homeState.get('conter')} times{' '}
			<button onClick={() => dispatch(CounterActions.increment())}>+</button>{' '}
   			<button onClick={() => dispatch(CounterActions.decrement())}>-</button>{' '}
   			<button onClick={() => dispatch(CounterActions.incrementIfOdd())}>Increment if odd</button>{' '}
    		<button onClick={() => dispatch(CounterActions.incrementAsync())}>Increment async</button>
            <Link to={'/counter'}>计时器</Link>
		</p>
  	}
}
// 限制组件的props安全
Counter.propTypes = {
    // increment必须为fucntion,且必须存在
    // increment: PropTypes.func.isRequired,
    // incrementIfOdd: PropTypes.func.isRequired,
    // incrementAsync: PropTypes.func.isRequired,
    // decrement: PropTypes.func.isRequired,
    // // counter必须为数字，且必须存在
    // counter: PropTypes.number.isRequired
};

export default Counter
