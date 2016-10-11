import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import rootReducer from '../reducers/counter.js';
import customStore from '../store/configureStore.js';



class Counter extends Component {
	render() {
		const { increment, incrementIfOdd, incrementAsync, decrement, counterState } = this.props;
    console.log(counterState)
		return (
			<p>
				Clicked: {counterState} times
				{' '}
				<button onClick={increment}>+</button>
        		{' '}
       			<button onClick={decrement}>-</button>
        		{' '}
       			<button onClick={incrementIfOdd}>Increment if odd</button>
       			{' '}
        		<button onClick={() => incrementAsync()}>Increment async</button>
			</p>
		)
	}
}
// 限制组件的props安全
// Counter.propTypes = {
//     // increment必须为fucntion,且必须存在
//     increment: PropTypes.func.isRequired,
//     incrementIfOdd: PropTypes.func.isRequired,
//     incrementAsync: PropTypes.func.isRequired,
//     decrement: PropTypes.func.isRequired,
//     // counter必须为数字，且必须存在
//     // counter: PropTypes.objects.isRequired
// };

export default Counter

Counter = connect(state => state, dispatch => ({
  actions: bindActionCreators(Actions , dispatch)
}))(Counter);

const Store = customStore(rootReducer);
