"use strict";
// function sum (...res:number[]):number{
//     var sum = 0;
//     for(let i in res){
//         sum = sum + res[i]
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4));
// class Person{
//     name:string;
//     constructor(n:string){
//         this.name = n
//     }
//     run():void{
//         console.log(this.name);
//     }
// }
// var p = new Person('颤三');
// p.run()
// 函数继承
/*

*/
// class Person{
//     // 属性
//     name:string;
//     // 每个类自己的constructor其实就是定义自身的属性和方法，而不是原型上的。可以直接使用this.abc来添加，this指自己，super指父类
//     constructor(name:string){
//         this.name = name;
//     }
//     // 方法 
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// class web extends Person{
//     constructor(name:string){
//         super(name)
//     }
// }
// var w = new web('李四') //实例化类
// console.log(w.run());
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// class web extends Person{
//     constructor(name:string){
//         super(name)
//     }
// }
// // 实例化类
// var w = new web('张三')
// console.log(w.run())  ;
