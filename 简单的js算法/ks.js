/**
 * 
 * 
 * 1、每次可以挖到多个矿石，每个矿石的重量都不一样，挖矿结束后需要通过一款平衡矿车运送下山；
   2、平衡矿车有左右2个车厢，中间只有1个车轮沿着导轨滑到山下，
    且矿车只有在2个车厢重量完全相等且矿石数量相差不超过1个的情况下才能成功运送矿石，否则在转弯时可能出现侧翻。
 * 
 */


let sum = 0
function time(arr){
    
    
        for(let i of arr){
             sum = sum + i
        }
        return (sum/2)

}

let s = time([3,7,4,11,8,10])
let x = [3,7,4,11,8,10]

x.sort((a,b)=>{
    return a-b
})



console.log(x)
// console.log(s)