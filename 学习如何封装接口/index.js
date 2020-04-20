import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationType from './mutation-types.js' 

const USER_LOGIN = "USER_LOGIN"
const USER_TOEKEN = "USER_TOEKEN"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		// hasLogin:false,//是否登录
		userInfo:JSON.parse(window.localStorage.getItem("userInfo")) || {},//用于存放用户账号数据
		loginToken:JSON.parse(window.localStorage.getItem("token")) || ""//存放token
	},
	mutations:{
		// 用户登录
		[USER_LOGIN](state,data){
			// state.hasLogin = true;
			state.userInfo = data;
			window.localStorage.setItem("userInfo",JSON.stringify(data))
		},
		// 用户TOKEN
		[USER_TOEKEN](state,data){
			state.loginToken = data
			// console.log(state.loginToken)
			window.localStorage.setItem("token",JSON.stringify(data))
		}
	},
	actions:{}
})

export default store