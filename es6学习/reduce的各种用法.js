

// 求和
// let arr = [1,2,3,4,5]

// // reduce会返回一个新的数组 不会改变原数组 

// let sum = arr.reduce((x,y,a,b)=>{
//     return x+y
// },0)

// console.log(sum)

// 将二维数组转化为一维数组

let arr = [[2,3],[3,4],[1]]

let flat = arr.reduce((a,b)=>{
    return a.concat(b)
})

console.log(flat)