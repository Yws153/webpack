"use strict";
// import $ from "../../bower_components/jquery/dist/jquery.js";
import * as ActionTypes from '../constants/ActionTypes.js'
import fetch from 'isomorphic-fetch'
import { URL_INITNOTES, URL_ADDNOTES, URL_DELETENOTES } from '../constants/fetch.constant.js'
import { checkHttpStatus } from '../utils.js'

export const changeFormDisplay = () => ({
	type: ActionTypes.CHANGE_FORM_DISPLAY
})

//异步action会被redux-thunk中间件拦截，传入dispatch，getState等参数后执行
export const initNotes = () => (dispatch, getState) => {
	fetch(URL_INITNOTES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: ''

    //   body: JSON.stringify({ password: '234' })
    })
    .then(checkHttpStatus)
    .then(res => res.json())
    .then(json => {
      try {
        // throw error if it is invalid
        // let decoded = jwtDecode(res.ok)
        // dispatch(pushState(null, '/'))
        // alert(JSON.stringify(json))
		dispatch({
			type: ActionTypes.INIT_NOTES,
			receiveData: json.data
		})

      } catch (e) {
        // get the token which is invalid
        alert(e)
      }
    })
    .catch(error => {
      // fail to get the jwt token
    })
}

export const addNote = (newNote) => (dispatch, getState) => {
	const title = getState().noteState.get('title')
	const description = getState().noteState.get('description')

	fetch(URL_ADDNOTES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({title: title, description: description})

    //   body: JSON.stringify({ password: '234' })
    })
    .then(checkHttpStatus)
    .then(res => res.json())
    .then(res => {
      try {
        // throw error if it is invalid
        // let decoded = jwtDecode(res.ok)
        // dispatch(pushState(null, '/'))
        alert(JSON.stringify(res))

		// dispatch(initNotes())


      } catch (e) {
        // get the token which is invalid
        alert(e)
      }
    })
    .catch(error => {
      // fail to get the jwt token
    })
}

export const changeTitle = (title) => ({
	type: ActionTypes.CHANGE_TITLE,
	title
})

export const changeDesc = (description) => ({
	type: ActionTypes.CHANGE_DESC,
	description
})


export const deleteNote = (id) => (dispatch, getState) => {
	console.log(id)
	fetch(URL_DELETENOTES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({id: id})

    //   body: JSON.stringify({ password: '234' })
    })
    .then(checkHttpStatus)
    .then(res => res.json())
    .then(json => {
      try {
        // throw error if it is invalid
        // let decoded = jwtDecode(res.ok)
        // dispatch(pushState(null, '/'))
        // alert(JSON.stringify(json))

		if (json.ok) {
			// dispatch({
			// 	type: ActionTypes.INIT_NOTES,
			// 	receiveData: json.data
			// })
		} else {
			alert(JSON.stringify(json.err))
		}
      } catch (e) {
        // get the token which is invalid
        alert(e)
      }
    })
    .catch(error => {
      // fail to get the jwt token
    })
}

function notesSort(newNotes){
	/*将数据库取到的notes倒序排列再显示，即后添加上去的记录在最前面显示*/
	newNotes.reverse();
	return newNotes;
}
