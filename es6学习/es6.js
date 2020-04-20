// // rest 参数

// function add(...args){
//         // console.log(args)
        
//         let sum = 0
//         for(let i of args){
//             sum  = sum +  i
//         }

//         return sum 

// }

// // console.log(add(1,23,4,5))

// var arr = [11,22,43,14,65]

// for(let i in arr){
//     // console.log(arr[i])
//     // console.log(i)
// }

// for(let i of arr){
//     console.log(arr[i])
// }


// const obj = {name:'lww',age:20}


// const objcopy = JSON.stringify(obj)
// console.log(objcopy)

// console.log(JSON.parse(objcopy))

/**
 * JSON.stringify 把js对象转化为json对象，
 * JSON.parse 把JSON对象 转化为js对象
 */


//  eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。

console.log(eval('2+2'))