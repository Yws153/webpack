import 'es6-promise';
import fetch from 'isomorphic-fetch';	//作用：引入当前文件即引入fetch

export const USRID = sessionStorage.getItem('usrid') || '13820235391';//18907489490

export const HEADERS = {
	'Content-Type': 'application/json'//x-www-form-urlencoded'
};

export const URL_GETACISSUE = 'http://localhost:2000/login';
// export const URL_SETDEFAULTDB = 'http://10.0.0.99:3000/XFN-MF-1-master/auth/setdefaultdb.do';

// // config
// export const URL_GETACLIST = 'http://10.0.0.99:3000/XFN-MF-1-master/config/getaclist.do';
// export const URL_INSERTAC = 'http://10.0.0.99:3000/XFN-MF-1-master/config/insertac.do';
// export const URL_MODIFYAC = 'http://10.0.0.99:3000/XFN-MF-1-master/config/modifyac.do';
// export const URL_DELETEAC = 'http://10.0.0.99:3000/XFN-MF-1-master/config/deleteac.do';
// export const URL_SETVCNAME = 'http://10.0.0.99:3000/XFN-MF-1-master/config/setvcname.do';
// export const URL_SETCURRENCY = 'http://10.0.0.99:3000/XFN-MF-1-master/config/setcurrency.do';
// export const URL_SETAUTHORIZE = 'http://10.0.0.99:3000/XFN-MF-1-master/config/setauthorize.do';
// export const URL_SETNAMEOFCOMPANY = 'http://10.0.0.99:3000/XFN-MF-1-master/config/setnameofcompany.do';
// export const URL_SETACBALANCE = 'http://10.0.0.99:3000/XFN-MF-1-master/config/setacbalance.do';
// export const URL_CREATEACSET = 'http://10.0.0.99:3000/XFN-MF-1-master/config/createacset.do';
// export const URL_SETNAMEOFDB = 'http://10.0.0.99:3000/XFN-MF-1-master/config/setnameofdb.do';
// export const URL_CREATESUBUSER = 'http://10.0.0.99:3000/XFN-MF-1-master/config/createsubuser.do';
// export const URL_CANCLESUBUSER = 'http://10.0.0.99:3000/XFN-MF-1-master/config/canclesubuser.do';



// export const URL_GETVCLIST = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/getvclist.do';
// export const URL_GETLASTVCID = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/getlastvcid.do';
// export const URL_INSERTVC = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/insertvc.do';
// export const URL_MODIFYVC = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/modifyvc.do';
// export const URL_DELETEVC = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/deletevc.do';
// export const URL_GETACBALANCE = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/getacbalance.do';
// export const URL_GETBALANCESHEET = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/getbalancesheet.do';
// export const URL_GETINCOMESTATEMENT = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/getincomestatement.do';
// export const URL_GETACISSUE = 'http://10.0.0.99:3000/XFN-MF-1-master/IsvReceive/getacissue.do';

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
