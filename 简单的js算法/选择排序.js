

function select(){
    
    // 找出最小的元素
    let arr = [8,6,10,5,3]


    for(let j=0;j<arr.length-1;j++){
        let index = j;
        for(let i=(j+1);i<arr.length;i++){
            if(arr[index]>arr[i]){
                index = i
            }
        }
        if(index != j){
            [arr[j],arr[index]] = [arr[index],arr[j]]
        }
    }    


        console.log(arr)
}

select()

