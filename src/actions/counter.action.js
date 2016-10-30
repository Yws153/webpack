import * as ActionTypes from '../constants/ActionTypes.js'

//导出加一的方法
export const increment = () => ({
    type: ActionTypes.INCREMENT_COUNTER
})

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
    const counter = getState().counter
    const conter =  counter.get('conter')

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