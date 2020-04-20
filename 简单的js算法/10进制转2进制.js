function stack(n){
    
    var arr = []
    var str = ''

    while(n > 0){
        arr.push(n%2)

        n = Math.floor(n/2)
    }

     while(arr.length != 0){
        str = str + arr.pop()
     }

     console.log(str)
    
}


stack(32)



