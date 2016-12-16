import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import * as CounterActions from '../../actions/counter.action.js'

@connect(state => state)
class Counter extends Component {
  	render() {
		// const { homeState, actions } = this.props;
        const { homeState, actions } = this.props;

        console.log(actions)

        // const homeState = fromJS({
        //     conter : 0
        // })

		return <p>
			Clicked: {homeState.get('conter')} times{' '}
			<button onClick={() => actions.increment()}>+</button>{' '}
   			<button onClick={() => actions.decrement()}>-</button>{' '}
   			<button onClick={() => actions.incrementIfOdd()}>Increment if odd</button>{' '}
    		<button onClick={() => actions.incrementAsync()}>Increment async</button>
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
