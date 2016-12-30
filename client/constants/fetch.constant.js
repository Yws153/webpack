import 'es6-promise';
import fetch from 'isomorphic-fetch';	//作用：引入当前文件即引入fetch

export const USRID = sessionStorage.getItem('usrid') || '13820235391';//18907489490

export const HEADERS = {
	'Content-Type': 'application/json'//x-www-form-urlencoded'
};

export const URL_GETACISSUE = 'http://localhost:2000/login';
export const URL_INITNOTES = 'http://localhost:2000/initnotes';
export const URL_ADDNOTES = 'http://localhost:2000/addnotes'
export const URL_DELETENOTES = 'http://localhost:2000/deletenotes'

// export default
// function fetchApi(type, method, data = '', callback) {
// 	let url, option
//
// 	switch (method.toUpperCase()) {
// 		case 'GET':
// 			url = URL[type] + '?' + data
// 			option = {
// 				credentials: 'include'
// 			}
// 			break
// 		case 'POST':
// 			url = URL[type]
// 			option = {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				credentials: 'include',
// 				body: data
// 			}
// 			break
// 		default:
// 			return console.error('method is not GET or POST')
// 	}
// 	//console.log('url---------', url, type)
// 	thirdparty.hidePreloader()
// 	thirdparty.showPreloader({
// 		text: "使劲加载中.."
// 	})
//
// 	return fetch(url, option)
// 	.then(res => {
// 		if (res.status === 200)
// 		{
// 			return res.json()
// 		}
// 		else {
// 			return {
// 				code: '-2',
// 				// message: err
// 				message: `通信异常，服务器返回码${res.status}`
// 			}
// 		}
//
// 	})
// 	.catch(err => {
// 		thirdparty.hidePreloader()
// 		return {
// 			code: '-2',
// 			// message: err
// 			message: `系统无响应`
// 		}
// 	})
// 	.then(json => {
// 		thirdparty.hidePreloader()
// 		callback(json)
// 	})
// }
