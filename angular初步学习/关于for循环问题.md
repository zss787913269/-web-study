```
for (var i = 0; i < 5; i++) { 
  setTimeout(function (){
    console.log(i); 
   },1000); 
}
```

结果：5 5 5 5 5

为什么不是 1 2 3 4 5，问题出在作用域上。

因为 setTimeout 的 console.log(i); 的i是 var 定义的，所以是函数级的作用域，不属于 for 循环体，属于 global。等到 for 循环结束，i 已经等于 5 了，这个时候再执行 setTimeout 的五个回调函数（参考上面对事件机制的阐述），里面的 console.log(i); 的 i 去向上找作用域，只能找到 global下 的 i，即 5。所以输出都是 5。





let 为代码块的作用域，所以每一次 for 循环，console.log(i); 都引用到 for 代码块作用域下的i，因为这样被引用，所以 for 循环结束后，这些作用域在 setTimeout 未执行前都不会被释放。

