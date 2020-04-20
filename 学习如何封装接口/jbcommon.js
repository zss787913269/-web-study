import http from './http.js'
import {token,jbim,md5salt} from './jbim.js'
import md5sign from './sign.js'




const jbcommon = {
	//公共函数
	common(url,obj){
		return new Promise((resolve,reject)=>{
			obj['s']=url;
			obj = md5sign.enryptSignData(obj,md5salt)
			http.get(obj).then(res=>{
				resolve(res)
			}).catch(err=>{
				reject(err)
			})
		})
	},
	// 发送邮件
	sendMail(mailto,mailtile,mailcontent){
		return this.common("App.Comfunc.SendMail",{mailto,mailtile,mailcontent,token})
	}	
	
	
}

export {jbcommon}