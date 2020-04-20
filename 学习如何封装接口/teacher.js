import http from './http.js'
import {token,jbim,md5salt} from './jbim.js'
import md5sign from './sign.js'




const teacher = {
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
	// 发布通知信息 1
	createMessageNote(type,receiver,title,content,submitinfo,category,ext_data){
		
		return this.common("Teacher.TeacherUtils.CreateMessageNote",type,token,receiver,title,content,submitinfo,category,ext_data)
	},
	// 获取发布的通知消息详情 2
	getMessageNote(id){
		return this.common("Teacher.TeacherUtils.GetMessageNote",{token,id})
	},
	// 获取发布的消息通知列表 3
	getListMessageNote(){
		return this.common("Teacher.TeacherUtils.GetListMessageNote",{token})
	}, 
	// 更新通知消息4
	updateMessageNote(id,type,receiver,title,content,filedata,category,ext_data){
		return this.common("Teacher.TeacherUtils.UpdateMessageNote",{token,id,type,receiver,title,content,filedata,category,ext_data})
	},
	// 删除发布的通知消息5
	deleteMessageNote(id){
		return this.common("Teacher.TeacherUtils.DeleteMessageNote",{token,id})
	},
	// 删除发布的通知消息6
	getMessageNoteRecv(msgrecvid){
		return this.common("Teacher.TeacherUtils.GetMessageNoteRecv",{token,msgrecvid})
	},
	// 阅读通知7
	readMessageNote(msgid){
		return this.common("Teacher.TeacherUtils.ReadMessageNote",{token,msgid})
	},
	// 发布作业8
	// 0,"语文",1214290434465792,"zym的作业","语文作业内容"
	createjob(classid,subject,students,title,content,filedata,ext_data){
		return this.common("Teacher.TeacherUtils.Createjob",{subject,classid,token,students,title,content,filedata,ext_data})
	},
	// 查看作业列表9
	getListjob(){
		return this.common("Teacher.TeacherUtils.GetListjob",{token})
	},
	// 获取的作业任务详情10
	getJob(id){
		return this.common("Teacher.TeacherUtils.Getjob",{id,token})
	},
	// 删除作业任务11
	deletejob(id){
		return this.common("Teacher.TeacherUtils.Deletejob",{id,token})
	},
	// 编辑发布的作业任务12
	updatejob(id,students,title,content,filedata,ext_data){
		return this.common("Teacher.TeacherUtils.Updatejob",{id,token,students,title,content,filedata,ext_data})
	},
	// 根据作业任务id和学生id获取的作业完成详情，13
	getjobRecvByjobiduserid(jobid,studentid){
		return this.common("Teacher.TeacherUtils.GetjobRecvByjobiduserid",{token,jobid,studentid})
	},
	// 根据作业任务id和学生id获取的作业完成详情，14
	getjobRecvByjobid(jobid){
		return this.common("Teacher.TeacherUtils.GetjobRecvByjobid",{token,jobid})
	},
	// 获取的作业提交或者批改表记录的详情，15
	getjobRecv(id){
		return this.common("Teacher.TeacherUtils.GetjobRecv",{token,id})
	},
	// 获取作业任务的提交与批改的列表信息，16
	getListjobcorrectbystudentid(jobid,studentid){
		return this.common("Teacher.TeacherUtils.GetListjobcorrectbystudentid",{token,jobid,studentid})
	},
	// 获取作业任务的提交与批改的列表信息17
	getListjobcorrectAll(jobid){
		return this.common("Teacher.TeacherUtils.GetListjobcorrectAll",{token,jobid})
	},
	// 更新提交或者批改的作业表信息18
	updatejobRecv(id,jobid,parentid,studentid,jobtype,submittext,filedata,scoreGrading,isfullright,islike,ext_data,$isNeedDingzheng){
		return this.common("Teacher.TeacherUtils.UpdatejobRecv",{token,id,jobid,parentid,studentid,jobtype,submittext,filedata,scoreGrading,isfullright,islike,ext_data,$isNeedDingzheng})
	},
	// 批改作业，19
	correctjob(jobid,parentid,studentid,jobtype,submittext,filedata,scoreGrading,isfullright,islike,ext_data,$isNeedDingzheng){
		return this.common("Teacher.TeacherUtils.Correctjob",{token,jobid,parentid,studentid,jobtype,submittext,filedata,scoreGrading,isfullright,islike,ext_data,$isNeedDingzheng})
	},
	// 签字确认通知 20
	answerMessageNote(msgid,signdata,ext_data){
		return this.common("Teacher.TeacherUtils.AnswerMessageNote",{token,msgid,signdata,ext_data})
	},
	// 获取通知消息的反馈列表 21
	getListMessageNoteRecv(msgid,page,perpage){
		return this.common("Teacher.TeacherUtils.GetListMessageNoteRecv",{token,msgid,page,perpage})
	},
	// 获取用户自己的应用中心列表 8
	appStoreUserList(){
		return this.common("Teacher.UserAbout.AppStoreUserList",{token})
	},
	// 获取设备必装的app 7
	appStoreUserList(){
		return this.common("Teacher.UserAbout.GetDeviceMustAPP",{token})
	},
	// 二维码授权登陆 6
	authqrcodelogin(qrcodeuuid){
		return this.common("Teacher.UserAbout.Authqrcodelogin",{token,qrcodeuuid})
	},
	// 获取用户自己的信息 5
	getselfinfo(qrcodeuuid){
		return this.common("Teacher.UserAbout.Getselfinfo",{token,qrcodeuuid})
	},
	// update用户自己的信息 4
	updateselfinfo(displayname,photo,sex,address,company,social,constellation,mood,birthday,ext_data){
		return this.common("Teacher.UserAbout.Updateselfinfo",{token,displayname,photo,sex,address,company,social,constellation,mood,birthday,ext_data})
	},
	// update用户自己的密码 3
	updateselfpassword(oldpassword,newpassword){
		return this.common("Teacher.UserAbout.Updateselfpassword",{token,oldpassword,newpassword})
	},
	// 用户绑定手机号 2
	userbindphone(telephone,smscode){
		return this.common("Teacher.UserAbout.Userbindphone",{token,telephone,smscode})
	},
	// 获取用户自己的设备信息 1
	getselfDevice(){
		return this.common("Teacher.UserAbout.GetselfDevice",{token})
	}
	
	
	
	
	
	
}

export {teacher}