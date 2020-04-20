import http from './http.js'
import {token,jbim,md5salt} from './jbim.js'
import md5sign from './sign.js'




const student = {
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
	
	// 获取发布的通知消息详情
	getMessageNote(id){
		return this.common("Student.StudentUtils.GetMessageNote",{token,id})
	},
	// 学生获取自己的通知反馈列表
	getListMessageNoteRecv(){
		return this.common("Student.StudentUtils.GetListMessageNoteRecv",{token})
	},
	// 获取需要完成的作业
	getmustjob(){
		return this.common("Student.StudentUtils.Getmustjob",{token})
	},
	// 提交作业
	submitjob(jobid,memo,filedata,ext_data){
		return this.common("Student.StudentUtils.Submitjob",{token,jobid,memo,filedata,ext_data})
	},
	//获取历史作业任务
	gethistoryjob(){
		return this.common("Student.StudentUtils.Gethistoryjob",{token})
	},
	// 疑问作业
	questionjob(jobid,parentid,memo,filedata,ext_data){
		return this.common("Student.StudentUtils.Questionjob",{token,jobid,parentid,memo,filedata,ext_data})
	},
	// 订正作业
	revisejob(jobid,parentid,filedata,ext_data){
		return this.common("Student.StudentUtils.Revisejob",{token,jobid,parentid,parentid,filedata,ext_data})
	},
	// 获取作业任务的提交与批改的列表信息
	getListjobcorrect(jobid){
		return this.common("Student.StudentUtils.GetListjobcorrect",{jobid,token})
	},
	// 阅读通知
	readMessageNote(msgid){
		return this.common("Student.StudentUtils.ReadMessageNote",{msgid,token})
	},
	// 获取通知反馈消息详情
	getMessageNoteRecv(msgrecvid){
		return this.common("Student.StudentUtils.GetMessageNoteRecv",{token,msgrecvid})
	},
	// 签字确认通知
	answerMessageNote(msgid,signdata,ext_data){
		return this.common("Student.StudentUtils.AnswerMessageNote",{token,msgid,signdata,ext_data})
	},
	// 获取用户自己的应用中心列表 8
	appStoreUserList(){
		return this.common("Student.UserAbout.AppStoreUserList",{token})
	},
	// 获取设备必装的app 7
	appStoreUserList(){
		return this.common("Student.UserAbout.GetDeviceMustAPP",{token})
	},
	// 二维码授权登陆 6
	authqrcodelogin(qrcodeuuid){
		return this.common("Student.UserAbout.Authqrcodelogin",{token,qrcodeuuid})
	},
	// 获取用户自己的信息 5
	getselfinfo(){
		return this.common("Student.UserAbout.Getselfinfo",{token})
	},
	// update用户自己的信息 4
	updateselfinfo(displayname,photo,sex,address,company,social,constellation,mood,birthday,ext_data){
		return this.common("Student.UserAbout.Updateselfinfo",{token,displayname,photo,sex,address,company,social,constellation,mood,birthday,ext_data})
	},
	// update用户自己的密码 3
	updateselfpassword(oldpassword,newpassword){
		return this.common("Student.UserAbout.Updateselfpassword",{token,oldpassword,newpassword})
	},
	// 用户绑定手机号 2
	userbindphone(telephone,smscode){
		return this.common("Student.UserAbout.Userbindphone",{token,telephone,smscode})
	},
	// 获取用户自己的设备信息 1
	getselfDevice(){
		return this.common("Student.UserAbout.GetselfDevice",{token})
	}
	
	
	
}

export {student}