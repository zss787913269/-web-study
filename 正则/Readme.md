##### 正则表达式
+  exec    执行查找匹配的RegExp方法，它返回一个数组，失败则返回null
+ test    执行查找匹配的RegExp方法，返回false，或true
+  match   执行查找匹配的String方法，返回一个数组，失败返回Null
+  search  测试匹配的String方法，返回匹配到的位置的索引，失败返回-1
+  replace 查找匹配的String方法，并且使用替换字符串替换掉匹配到的字符串
+  split   用于把一个字符串分割成字符串数组。

##### 编写正则表达式
+ 创建的方式有两种 类似于数组的两种创建方式
        

    字面量创建方式（两个斜杆之间抱起来的，都是用来描述规则的元字符） 
    let reg = /\d+/;

    构造函数模式 两个参数：元字符字符串，修饰符字符串
    let reg = new RegExp("\\d+")

+ 正则表达式由两部分组成
  + 元字符 

    + ```
      常用元字符
      1.量词元字符，设置出现的次数
      
      *  		零到多次  \d
      +  	    一到多次
      ？ 	   零次或一次
      {n} 	出现n次
      {n,} 	出现n到多次
      {n,m} 	出现n到m次
      
      2.特殊元字符，单个或者组合在一起代表特殊的含义
      \ 		转义字符（普通->特殊->普通）
      . 		除\n(换行符)以为的任意字符
      ^ 		以哪一个元字符作为开始
      $ 		以哪一个元字符作为结束
      \d 		0~9之间的一个数字
      \D 		非0-9之间的一个数字
      \w		数字,字母，下滑线中的任意一个字符 单词字符包括：a-z、A-Z、0-9，以及下划线。
      \W  	查找非单词字符 （符号 % ！，）
      \S 		（小s）查找空白字符 
      \S 		（大S）查找非空白字符
      \t  	一个制表符（一个TAB键：4个空格）
      x|y 	x或者y中的一个字符
      [xyz] 	x或者y或者z中的一个字符
      [^xyz] 	除了xyz的字符
      [a-z]  	指定a-z这个范围中的任意字符 [0-9a-zA-Z_] == \w
      \b 		匹配一个单词的边界
      
      3.普通元字符
      /abc/ 此正则匹配的就说 "abc"
      
      ```

  + 修饰符

    ```
    i => 忽略单词大小写匹配
    m => 进行多行匹配
    g => 全局匹配
    ```

  + 元字符的练习

    + ```js
            以数字开头输出
                 let reg =/^\d+$/;
                 console.log(reg.test("das"));             false
                 console.log(reg.test("1das"));            false
                 console.log(reg.test("3454563"));         false
              
                 以1开头的11位电话号码
                 let reg =/^1\d{10}$/;
            
                 console.log(reg.test("15977602740"));   true
          
                 转义字符的使用 \. 匹配2.3  .不是小数点 是除了\n以外的任意字符
          
                 let reg = /^2\.3$/
                 console.log(reg.test("2@3"));   false
                 console.log(reg.test("2.3"));   true
        ```


                 x|y的使用 匹配有18或者19的字符串
          
                 let reg = /^(18|19)$/
                 console.log(reg.test("18"));    true
                 console.log(reg.test("19"));    true
                 console.log(reg.test("1829"));   false
                 console.log(reg.test("198"));   false


    ​          
                中括号出现的字符一般都代表本身的含义
                 let reg = /^[@+]$/   以@开头 或者以 + 结尾 出现一次
                 console.log(reg.test('@@'));   false
                 console.log(reg.test('@+'));   false
          
                 let reg = /^[@+]$/   以@开头 或者以 + 结尾 出现多次
                 console.log(reg.test('@@'));   true
                 console.log(reg.test('@+'));   true
          
                 中括号中不存在多位数
          
                  let reg  = /^[18]$/;
                  console.log(reg.test("1"));   true
                  console.log(reg.test("8"));   true
                  console.log(reg.test("18"));   false

      

    

