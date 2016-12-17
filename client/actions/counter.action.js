import * as ActionTypes from '../constants/ActionTypes.js'
import fetch from 'isomorphic-fetch';
import jwtDecode from 'jwt-decode'
import { checkHttpStatus } from '../utils.js'

import {
    USRID,
    URL_GETACISSUE
} from '../constants/fetch.constant.js';

const HEADERS = {
	'Content-Type': 'application/json'//x-www-form-urlencoded'
};


//导出加一的方法
// export const increment = () => ({
//     type: ActionTypes.INCREMENT_COUNTER
// })

export const increment = () => dispatch => {

    const data = {
        articleTitle: '11111',
        articleDay: '2016-01-01',
        comment: {
            name:'12',
            email: '23',
            comment: '34',
            website: '90',
            admin: 'yezi'
        }
    }


    fetch(URL_GETACISSUE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)

    //   body: JSON.stringify({ password: '234' })
    })
    .then(checkHttpStatus)
    .then(res => res.json())
    .then(res => {
      try {
        // throw error if it is invalid
        let decoded = jwtDecode(res.ok)
        // dispatch(pushState(null, '/'))
        // alert(JSON.stringify(decoded))
      } catch (e) {
        // get the token which is invalid
        alert(e)
      }
    })
    .catch(error => {
      // fail to get the jwt token
    })

};

//导出减一的方法
export const decrement = () => ({
    type: ActionTypes.DECREMENT_COUNTER
})

// 导出减一的方法原始写法
// export function decrement() {
//   return {
//     type: ActionTypes.DECREMENT_COUNTER
//   }
// }

//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export const incrementIfOdd = () => (dispatch, getState) => {

    //获取state对象中的counter属性值
    // const { counter } = getState() 或
    const homeState = getState().homeState
    const conter =  homeState.get('conter')

    //偶数则返回
    if (conter % 2 === 0) {
        return
    }
    //没有返回就执行加一
    dispatch(increment())

}

//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export const incrementAsync = (delay = 1000) => dispatch => {
    setTimeout(() => {
        dispatch(increment())
    }, delay)
}

// 原始写法
// export function incrementAsync (delay = 1000) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment())
//     }, delay)
//   }
// }
