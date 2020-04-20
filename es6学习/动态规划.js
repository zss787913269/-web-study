
// 编程题：一个数组里面有一个数不一样，其他数是两两相同的，找到那个数
let arr = [1,1,2,2,3,4,4,5,5,6,6,7,7,8,8]

// 使用对象的唯一性


// let obj = {}


// for(let i in arr){
//     // 如果没有这个对象 它就等于1 
//    if(!obj[arr[i]]){
//        obj[arr[i]] = 1
//    }else{
//     //    如果已经存在这个对象 它就++
//     obj[arr[i]] ++ 
//    }
// }

// let uniq = ""

// // 循环得到1的值
// for(let i in obj){
//     if(obj[i] == 1){
//         uniq = i
//     }
// }

// 一个数组内有两个相同的数，通过编程找到这两个数


// let a = []
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<=arr.length-1;j++){
//         // if(arr[i] == arr[j]){
//         //     console.log(arr[j])
//         // }
//         if(arr[i] == arr[j]){
//             a.push(arr[j])
//         }
//     }
// }



// let s = new Set(arr),b = Array.from(s)



//b是去重之后的数组
//arr 是 所有相等的数组
//现在两个数组里面只有一个数字是不一样的 


// Set 可以很容易地实现并集（Union）、交集（Intersect）和差集



// let a = new Set([1, 2, 3]);
// let b = new Set([3, 2]);


// let difference = new Set([...a].filter(x => !b.has(x)));

// console.log(difference)



let a = [1,1,1,2,2,2,8,3,3,4,5,5,5,6,6]
let b = [1,1,1,2,2,2,3,3,4,5,5,5,6,6]

let res = a.filter((x)=>{
   return  x>=2
})

console.log(res)