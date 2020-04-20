#### 父页面向子页面传值

父页面发信息

```js
  private show(){
            let obj = window.frames["zym"].contentWindow.postMessage("主页面消息", 
            "http://localhost:8080/#/pages/index/index?id=3&name=zs&age=18")

            // console.log(obj)
      }
```

子页面收信息

```js
window.addEventListener('message',function(event){
					console.log(event.data)
	 }, false);
```



#### 父页面获取子页面数据

子页面发送信息

```js
let obj = window.parent.parent.postMessage("子页面消息", 
					 "http://192.168.31.95:3000")
```

父页面接收信息

```js

          private show(){
             window.addEventListener('message',function(event){
           			 console.log("接收到的子页面信息-----"+event.data)
			     }, false);
          }
```



