##### typeof 与 intanceof 的区别

+ 1.位置不同

  + ```js
    var a = 0;
    var b = new Array();
    console.log(typeof a); // number
    console.log(b instanceof Array); // true
    ```

+ 2.判断的类型不同，typeof可以判断基本类型和引用类型，而instanceof只能判断引用类型；

+ 3.结果不同

  + typyOf有六种返回结果

    + ```javascript
      "number","boolean","string","function","object","undefined" 
      ```

  + 而`instanceof`的结果只有`true`和`false`，它用于判断一个变量是不是某个对象的子类，它会沿着原型链`__proto__`向上找，如果找到匹配的对象，就返回true，否则返回false

    + 预判断类型一般为3种：

    + ```js
      var a = new Array();
      var b = new Object();
      var c = new RegExp();
      var d = function(){};
      var e = new d();
      
      console.log(a instanceof Array); // true
      console.log(a instanceof Object); // true
      
      console.log(b instanceof Object); // true
      
      console.log(c instanceof RegExp); // true
      console.log(c instanceof Object); // true
      
      console.log(d instanceof Function); // true
      console.log(d instanceof Object); // true
      
      ```

    + 