"use strict";
// import { combineReducers } from "redux";
// import { INIT_NOTES, ADD_NOTE, DELETE_NOTE } from "../action/action.jsx";

// //处理笔记初始化、添加及删除请求
// function notes(state = [ ], action){
// 	//每一次的操作无论是添加、删除还是初始化，全部的笔记内容会被重新更新一次
// 	switch(action.type){
// 		case INIT_NOTES:
// 			return [ ...action.notes ];
// 		case ADD_NOTE:
// 			return [ ...action.notes ];
// 		case DELETE_NOTE:
// 			return [ ...action.notes ];
// 		default:
// 			return state;
// 	}
// }

// const rootReducer = combineReducers({ notes });
// export default rootReducer;

import * as ActionTypes from '../constants/ActionTypes.js'
import { fromJS } from 'immutable'

const noteState = fromJS({
    formDisplayed: false,
    notes: [
        // {
        //     title: '111',
        //     description: '22222',
        //     date: '2016-234'
        // }
    ],
    title: '',
    description: '',
})

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function handlenote(state = noteState, action) {
  	return ({
        [ActionTypes.CHANGE_FORM_DISPLAY]           : () => state.update('formDisplayed', v => !v),
		[ActionTypes.INIT_NOTES]             		: () => state.set('notes', fromJS(action.receiveData)),
		[ActionTypes.ADD_NOTE]             			: () => state.set('notes', action.notes),
		[ActionTypes.DELETE_NOTE]             		: () => state.set('notes', action.notes),
        [ActionTypes.CHANGE_TITLE]             		: () => state.set('title', action.title),
        [ActionTypes.CHANGE_DESC]             		: () => state.set('description', action.description)
	}[action.type] || (() => state))();
}
