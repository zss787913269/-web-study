

// ~function(){

//      /**
//          * 循环原始字符串中的每一项，让每一项从当前位置向后截取取T.length个字符，然后和T进行比较
//          * 如果不一样，继续循环
//          */
//     function myIndexOf(T){
//         //  => this:s


//         let lenT = T.length,lenS = this.length ,res = -1

//         for(let i =0;i<  lenS - lenT+1;i++ ){
//             if(   this.substr(i,lenT) === T ){
//                 res = i
//                 break;
//             }

//         }
//         return res;
//     }
//     String.prototype.myIndexOf = myIndexOf;
// }();

// let S = "abcd", T = "a"

// console.log(S.myIndexOf(T))



~function(){

    function myIndexOf(T){

        let Slen = this.length,Tlen = T.length,res = -1;

        for(let i = 0; i < Slen - Tlen+1;i++){
            if(this.substr(i,Tlen) === T){
                res = i;
               break
            }
        }
        return res
    }

        String.prototype.myIndexOf = myIndexOf

}()

let S = "abcd", T = "l"

console.log(S.myIndexOf(T))


