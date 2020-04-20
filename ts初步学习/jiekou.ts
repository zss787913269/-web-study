function logClass(params:string){

    return function(target:any){
        console.log(target); // 类
       console.log(params); // 调用logClass的参数
       

    }
}


@logClass('我是参数')
class HttpClient{
    
}

