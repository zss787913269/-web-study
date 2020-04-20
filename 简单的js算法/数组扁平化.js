


function  myFlat(arr){
    // 使用json.stringFly
   
    let res =  arr.toString().split(",").map((x)=>{
        return Number(x) 
    })

    // let c = Array.from(new Set(a)) 
   
    return [...new Set(res)]
}

let arr=[1,[2,3,[2,4]],3,4,5,6]

console.log(myFlat(arr))