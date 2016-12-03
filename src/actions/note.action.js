"use strict";
// import $ from "../../bower_components/jquery/dist/jquery.js";
import * as ActionTypes from '../constants/ActionTypes.js'
import fetch from 'isomorphic-fetch'
import { URL_GETACISSUE } from '../constants/fetch.constant.js'

//
// var server = require("../server/server");
// var router = require("../routes/index.js");
// var requestHandlers = require("../constants/requestHandlers");
//
// var handle={};
// handle["http://127.0.0.1:2000/"]=requestHandlers.start;
// handle["http://127.0.0.1:2000/start"]=requestHandlers.start;
// handle["http://127.0.0.1:2000/upload"]=requestHandlers.upload;
//
// server.start(router.route,handle);


//action创建函数
export const changeFormDisplay = () => ({
	type: ActionTypes.CHANGE_FORM_DISPLAY
})




//异步action会被redux-thunk中间件拦截，传入dispatch，getState等参数后执行
export const initNotes = () => (dispatch, getState) => {
	// handle["/"]=requestHandlers.start;
	// fetch('init', {credentials: 'include'}).then(res => {
	// 	if (res.status === 200)
	// 		alert('hello')
	// })


	console.log('int')
	// $.ajax({
	// 		url : "/init",
	// 		type : "get",
	// 		dataType : "json",
	// 		cache : false,
	// 		success : function(notes){
	// 			/*notes是从数据库读取到的笔记数组*/
	// 			notes=notesSort(notes);
	// 			dispatch({ type : INIT_NOTES, notes : notes });
	// 		}.bind(this),
	// 		error : function(){
	// 			console.log("notes获取失败~");
	// 		}.bind(this)
	// 	})
}

// export function initNotes(){
// 	return function(dispatch, getState){
// 		$.ajax({
// 			url : "/init",
// 			type : "get",
// 			dataType : "json",
// 			cache : false,
// 			success : function(notes){
// 				notes是从数据库读取到的笔记数组
// 				notes=notesSort(notes);
// 				dispatch({ type : INIT_NOTES, notes : notes });
// 			}.bind(this),
// 			error : function(){
// 				console.log("notes获取失败~");
// 			}.bind(this)
// 		})
// 	}
// };

export const addNote = (newNote) => (dispatch, getState) => {
	// $.ajax({
	// 		url : "/addNote",
	// 		type : "post",
	// 		contentType : "application/json; charset=utf-8",
	// 		dataType : "json",
	// 		//客户端与服务端通过json字符串进行通信
	// 		data : JSON.stringify(newNote),
	// 		cache : false,
	// 		success : function(notes){
	// 			console.log("笔记添加成功！");
	// 			notes=notesSort(notes);
	// 			dispatch({ type : ADD_NOTE, notes : notes });
	// 		}.bind(this),
	// 		error : function(){
	// 			console.log("笔记添加失败啦~");
	// 		}.bind(this)
	// 	});
}
// export function addNote(newNote){
// 	return function(dispatch, getState){
// 		$.ajax({
// 			url : "/addNote",
// 			type : "post",
// 			contentType : "application/json; charset=utf-8",
// 			dataType : "json",
// 			//客户端与服务端通过json字符串进行通信
// 			data : JSON.stringify(newNote),
// 			cache : false,
// 			success : function(notes){
// 				console.log("笔记添加成功！");
// 				notes=notesSort(notes);
// 				dispatch({ type : ADD_NOTE, notes : notes });
// 			}.bind(this),
// 			error : function(){
// 				console.log("笔记添加失败啦~");
// 			}.bind(this)
// 		});
// 	}
// };

export const deleteNote = (delete_date) => (dispatch, getState) => {
	console.log(delete_date)
	// $.ajax({
	// 		url : "/deleteNote",
	// 		type : "post",
	// 		contentType : "application/json; charset=utf-8",
	// 		dataType : "json",
	// 		data : JSON.stringify(delete_date),
	// 		cache : false,
	// 		success : function(notes){
	// 			console.log("笔记已经被删除啦！");
	// 			notes=notesSort(notes);
	// 			dispatch({ type : DELETE_NOTE, notes : notes });
	// 		}.bind(this),
	// 		error : function(){
	// 			console.log("笔记删除失败啦~");
	// 		}.bind(this)
	//
	// 	});
}
// export function deleteNote(delete_date){
// 	return function(dispatch, getState){
// 		$.ajax({
// 			url : "/deleteNote",
// 			type : "post",
// 			contentType : "application/json; charset=utf-8",
// 			dataType : "json",
// 			data : JSON.stringify(delete_date),
// 			cache : false,
// 			success : function(notes){
// 				console.log("笔记已经被删除啦！");
// 				notes=notesSort(notes);
// 				dispatch({ type : DELETE_NOTE, notes : notes });
// 			}.bind(this),
// 			error : function(){
// 				console.log("笔记删除失败啦~");
// 			}.bind(this)

// 		});
// 	}
// };

function notesSort(newNotes){
	/*将数据库取到的notes倒序排列再显示，即后添加上去的记录在最前面显示*/
	newNotes.reverse();
	return newNotes;
}
