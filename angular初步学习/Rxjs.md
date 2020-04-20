#### Rxjs学习

+ 目前常见的异步编程的几种方法
  + 1.回调函数
  + 2.事件监听/发布订阅
  + 3.Promise
  + 4.Rxjs



###### 回调函数的调用

+ ```js
  //主函数
  getCallBackData(callback){
   
    setTimeout(() => {
    
      var data= '彭丹'
    
      callback(data)
    
    }, 1000);
    
  //回调函数
  get((data)=>{
  
          console.log(data);
  
      })
      
   
  ```


+ 理解：
  + 为什么回调函数可以拿到主函数里面的数据
  + 如果碰见了带有回调函数的函数的时候就会将回调函数入队列，这样将所有回调函数入队列后，等所有代码体执行完成后再将回调函数一个个取出来执行

###### Promise的使用

+ ```js
  //主函数
   getPromiseData(){
      return new Promise((resolve,reject)=>{
  
          setTimeout(()=>{
            var name = 'zs'
            resolve(name)
          },1000)  
  
      })
    }
    
  //调用函数
  this.storage.getPromiseData().then((data)=>{
      console.log(data)
  })
  
  ```





###### Rxjs在angular的使用



+ promise和rxjs的用法基本相似。rxjs比promise要强大很多。比如rxjs可以中途撤回，rxjs可以发射多个值，rxjs提供了多种工具函数

+ 1.在需要使用rxjs中的文件 引入 因为angular已经集成rxjs 所以不需要安装

  + ```js
    import { Observable } from 'rxjs';
    
    ```

+ 2.使用(与promise的用法差不多

  + ```js
      getrxjsData(){
    
        return new Observable((observ)=>{
          setTimeout(()=>{
            var name = '张三'
            observ.next(name)
            // observ.error("失败")
          })
        })
    
      }
      
      //调用函数
      var rxjs = this.storage.getrxjsData()
      rxjs.subscribe((data)=>{
        console.log(data);
      })
    ```



###### Rxjs unsubscribe 取消订阅

+ Promise的创建之后，动作是无法撤回的。Observable是不一样，动作可以通过unsbscribe()方法中途撤回，而且Observable在内部做了智能的处理

+ 使用unsubscribe 取消订阅
  + ```js
    
    var rxjs = this.storage.getrxjsData().subscribe((data)=>{
        console.log(data);
      })
     
    
      setTimeout(() => {
          rxjs.unsubscribe()
      }, 1000);
    ```

###### Rxjs unsubscribe 多次执行

+ setTimeout()只执行一次，而setInterval可以多次调用。

  + ```js
     //主函数
     getrxjsData(){
    
        return new Observable((observ)=>{
          let count = 0
          setInterval(()=>{
    
           count++
              
            observ.next(count)
            // observ.error("失败")
          },1000)
        })
    
      }
      
     //调用函数
     var rxjs = this.storage.getrxjsData().subscribe((data)=>{
        console.log(data);
      })
      
     //此时 count++就会一直执行 如果用Promise就不会发生这样的效果
    ```

###### 在Rxjs中使用filter map

+ 1.引入

  + 使用filter

  + ```js
    import {map,filter} from 'rxjs/operators';
    ```

+ 2.使用filter

  + ```js
    var rxjs = this.storage.getrxjsData().pipe(
        filter((value:any)=>{if(value%2==0){return true } }))
      .subscribe((data)=>{ console.log(data);})
    ```

+ 使用map

  + ```js
      var rxjs = this.storage.getrxjsData().pipe(
        map((value:any)=>{ return  value + "-----我是map"} ))
      .subscribe((data)=>{ console.log(data);})
    
    ```

+ filer与map结合使用

  + ```js
     var rxjs = this.storage.getrxjsData().pipe(
          filter((value:any)=>{ if(value%2==0){ return true }}),
          map((value:any)=>{  return  value + "-----我是map"}))
          .subscribe((data)=>{console.log(data)})
    ```

+ 

