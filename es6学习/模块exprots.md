#### exports的各种使用

+ model.exports   -- node之中使用
+ exports   -- node之中使用
  + ```
    exports = model.exports  = {}
    ```

  + ```
    exports => {}
    model.exports =>{}
    
    两个指向的是不同的对象
    如果上面两个都存在 智能导出model.exports中的对象
    
    ```

  +  默认 `exports` 和 `module.exports` 是指向同一块内存的。 

  +  `exports` 是 `module` 的一个属性。 
  +  `module.exports` 导出的是整个模块， `exports` 导出的是一个对象。 
  +  **如果直接给`exports` 赋值则会切断与`module.exports`之间的联系** 
  +   `exports = { // *** }` 不会导出任何东西 

### export 与 export default

+  `export default` 和 `export` 都可以用于导出常量，函数，文件，模块等。 

+  通过`export` 方式导出，在导入时要加`{}` ，`export default` 则不需要 

+  同一个模块中 `export` 可以存在多个，`export default` 仅能存在一个。 

+  用 `export default` 导出的对象时不一定使用导出时的名字。因为这种方式实际上是将该导出对象设置为默认导出对象，完全可以重新命名。看下面的例子 

  + ```js
    const cel = {
    	name: '小明',
    	age: '20'
    }
    
    export default cel
    
    // b.js
    import cyq from './a.js'
    console.log(cyq.age)  // 20
    
    ```

  + 