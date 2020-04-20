import Paho from './paho-mqtt.js';
import http from './http.js'
let jbclient
let topic = "a";
let mqtthost = "api.benlaixuexi.com"
let port = 8083
let platform = ""
let token = JSON.parse(window.localStorage.getItem("token")) || ""
let md5salt = ""
import md5sign from './sign.js'

let jbim = {
	version:1,
	// ajax网络请求
	//登录
	login(username,password,apitype){
		let that = this
		let obj = {username,password,apitype}
		let url = "App.Login.Loginbyuser"
		
		obj['s']=url;
		
		return new Promise((resolve,reject)=>{
				http.get(obj).then(res=>{
					// token = res.data.token
					md5salt = res.data.md5salt
					that.init(mqtthost,port,res.data)
					resolve(res)
				}).catch(err=>{
					reject(err)
				})
		})
	},
	//IM初始化
	init:function (mqtthost,port,info){
			let that = this
			let client = new Paho.Client(mqtthost, Number(port), "/", "jbw_"+info.id);    
			
			jbclient = client
			client.onConnectionLost = onConnectionLost;
			client.onMessageArrived = onMessageArrived;
			
			client.onConnected = function () {
				// let message = new Paho.Message(JSON.stringify({"uid": "aaaaa", "cmd": "11"}));
				// message.destinationName = topic;
				// client.send(message);
				// that.sendMsg()
				// let message = new Paho.Message(JSON.stringify(obj));
				// message.destinationName = top;
				// jbclient.send(message);
				// that.sendSingleMsg();
			};
			
			// 退订
			function unsubscribe(){
				client.unsubscribe("/im/uid/"+info.id);
				client.unsubscribe("/im/ucd/jbw_"+info.id);
			};
			//订阅
			function subscribe(){
				client.subscribe("/im/uid/"+info.id, {qos: 1});
					client.subscribe("/im/ucd/jbw_"+info.id, {qos: 1});
					
					// for(class.length){
					// 	client.subscribe("/im/cg/classid", {qos: 1});
					// }
				
			} ;
			// 订阅主题  订阅b的主题
			function onConnect() {
				subscribe()
			};
		  
	
			// 失去连接
			function onConnectionLost(responseObject) {
				
				reconnect()
				// console.log(responseObject);
				// if (responseObject.errorCode !== 0) {
				// 	console.log("onConnectionLost:" + responseObject.errorMessage);
				// }
				
			};
	
			// 当消息到达的时候
			function onMessageArrived(message) {
				// console.log(message.payloadString);
			 //   var m = 
				// console.log(m);
			
				let msgObj = message.payloadString;
				
				console.log(msgObj);
				
				// if(msgObj.type == 1){
				// 	console.log("类型等于1");
				// }
			};
			
			//重新连接
			function reconnect(){
				unsubscribe()
				disconnect()
				connect()
			};
			function disconnect(){
				client.disconnect();
			};
	
			function connect() {
				client.connect({
					onSuccess: onConnect,
					cleanSession: true,
					useSSL: false,
					keepAliveInterval: 60,
					userName: "authcode",
					password: info.token
					
				});
			}
			connect();
	},

	// 公共函数
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
	
	// 文件上传到阿里云OSS cdn
	chooseImageUpload(file,classid=0,ext_data,appendixuuid){
		
		return new Promise((resolve,reject)=>{
			
		uni.chooseImage({
		 count: 1,
		 sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		 sourceType: ['album'], //从相册选择
		 success: function (res) {
		  const tempFilePaths = res.tempFilePaths;
		  const uploadTask = uni.uploadFile({
		   url : 'http://api.benlaixuexi.com/?s=App.Comfunc.Uploadfileoss',
		   filePath: tempFilePaths[0],
		   name: 'file',
		   formData: {
		    'classid': classid,
			 "token":token
		   },
		   success: function (uploadFileRes) {
					resolve(JSON.parse(uploadFileRes.data))
		   }
		  });
		 },
		 
		})
		})
		// return this.common("App.Comfunc.Uploadfileoss",{token,file,classid,ext_data,appendixuuid})
	},
	
	// 发送信息 
	sendMsg(target_id,msg_type,msg_body,needReadReceipt){
		return this.common("App.IM.SendSingleMsg",{token,target_id,msg_type,msg_body,needReadReceipt})
	},
	// 接收验证码
	sendsms(telephone){
		return this.common("App.Login.Sendsms",{telephone})
	},
	// 注册
	register(password,telephone,smscode){
		return this.common("App.Login.Register",{password,telephone,smscode})
	},
	// 添加好友
	friendsAdd(userids){
		return this.common("App.IM.FriendsAdd",{token,userids})
	},
	// 删除好友
	friendsRemove(userids){
		return this.common("App.IM.FriendsRemove",{token,userids})
	},
	// 获取用户信息
	getUserInfo(userid){ 
		return this.common("App.IM.UsersGetInfo",{token,userid})
	},
	// 获取自己的用户信息
	usersGetMyInfo(){
		return this.common("App.IM.UsersGetMyInfo",{token})
	},
	//获取好友列表
	friendsGetList(){
		return this.common("App.IM.UsersGetFriendInfo",{token})
	},
	//生成好友邀请码
	 friendGenJoinPleaseCode(){
		return this.common("App.IM.FriendGenJoinPleaseCode",{token})
	 },
	 // 邀请码加好友
	 friendJoinPlease(pleasecode){
		 return this.common("App.IM.FriendJoinPlease",{token,pleasecode})
	 },
	 // 创建班级
	 classGroupCreate(name,desc){
		  return this.common("App.IM.ClassGroupCreate",{token,name,desc})
	 },
	 //获取群聊列表
	 classGroupGetUserGroup(){
		return this.common("App.IM.ClassGroupGetUserGroup",{token})
	 },
	 //删除班级
	 classGroupDelete(gid){
		 return this.common("App.IM.ClassGroupDelete",{gid,token})
	},
	// 生成班级邀请码
	classGroupGenJoinPleaseCode(gid){
		 return this.common("App.IM.ClassGroupGenJoinPleaseCode",{gid,token})
	},
	//通过班级邀请码加入班级
	classGroupJoinPlease(pleasecode){
		 return this.common("App.IM.ClassGroupJoinPlease",{pleasecode,token})
	},
	//获取班级成员列表
	 classGroupGetAllMember(gid){
		  return this.common("App.IM.ClassGroupGetAllMember",{gid,token})
	 },
	//退出群聊
	 classGroupExitmembers(gid){
		 return this.common("App.IM.ClassGroupExitmembers",{gid,token})
	},
	// 删除班级成员
	classGroupDelMember(gid,userids){
		 return this.common("App.IM.ClassGroupDelMember",{gid,token,userids})
	},
	//增加班级成员
	classGroupAddMember(gid,userids){
		 return this.common("App.IM.ClassGroupAddMember",{gid,token,userids})
	},
	// 班级详情
	classGroupGetInfo(gid){
		 return this.common("App.IM.ClassGroupGetInfo",{gid,token})
	},
	//班级备注信息
	classGroupGetMembersInfo(gid){
		 return this.common("App.IM.ClassGroupGetMembersInfo",{gid,token})
	},
	//批量用户在线状态查询  有问题 返回值是false
	usersGetManyOnline(userids){
		return this.common("App.IM.UsersGetManyOnline",{userids,token})
	},
	// 更新班级信息 gid有问题
	classGroupUpdateInfo(gid){
		return this.common("App.IM.ClassGroupUpdateInfo",{token})
	},
	// 获取个人所在班级
	usersGetClassGroupInfo(){
		return this.common("App.IM.UsersGetClassGroupInfo",{token})
	},
	// 用户在线状态查询
	usersGetOnline(userid){
		return this.common("App.IM.UsersGetOnline",{userid,token})
	},
	// 修改密码 接口请求失败
	usersModifyPsw(oldpassword,newpassword){
		return this.common("App.IM.UsersModifyPsw",{oldpassword,newpassword,token})
	},
	// 加入黑名单
	addUsersToBlacklist(userids){
		return this.common("App.IM.AddUsersToBlacklist",{userids,token})
	},
	// 获取登录在线设备 
	getOnlineDeviceInfo(){
		return this.common("App.IM.GetOnlineDeviceInfo",{token})
	},
	// 文件下载
	fileDownload(fileid){
		return this.common("App.IM.FileDownload",{fileid,token})
	},
	
	
}


export  {jbim,token};