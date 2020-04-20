import axios from 'axios'; // 引入axios
import qs from 'qs'
axios.defaults.baseURL=""
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


let http = {
	get(params){
	
	console.log()
		return new Promise((resolve,reject)=>{
			axios.get("/",{
				params:params
			}).then(res=>{
				resolve(res.data)
			}).catch((err)=>{
				reject(err.data)
			})
		})
	}
}

export default http