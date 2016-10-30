import React, { Component, PropTypes } from 'react';
import * as CounterActions from '../actions/counter.action.js'

class Counter extends Component {
  	render() {
    		const { counter, actions } = this.props;
    		return (
    			<p>
    				  Clicked: {counter.get('conter')} times
    				  {' '}
    				  {/* <button onClick={increment}>+</button> */}
    				  <button onClick={() => actions.increment()}>+</button>
            	{' '}
       			  <button onClick={() => actions.decrement()}>-</button>
        		  {' '}
       			  <button onClick={() => actions.incrementIfOdd()}>Increment if odd</button>
       			  {' '}
        		  <button onClick={() => actions.incrementAsync()}>Increment async</button>
    			</p>
    		)
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
