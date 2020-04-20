#### BFC是什么

+ BFC 全称 block format context  块级格式化上下文
+ 作用：形成一个完全独立的布局，让空间中的子元素不会影响到外面的布局

#### BFC的作用

+ 1.外边距折叠

  + 如果有两个盒子 第一个是margin-bottom:20px  第二个盒子是margin-tio:30px

  + 按理说 应该距离50px  但是事实并不是, 取两个的最大值 就是30px

    ```html
    <div class="box">
            <div class="box1"></div>
            <div class="box2"> </div>
    </div>
    
      <style>
        .box{
            background-color: pink;
            height: 500px;
        }
        .box1{
            background-color: red;
            height: 100px;
            width: 200px;
            margin-bottom: 20px;
        }
        .box2{
            background-color: green;
            height: 100px;
            width: 200px;
            margin-top: 30px;
        }
       </style>
    ```

  + 如何解决 : 让box1或者box2成为 BFC,给box1增加一个父元素,并设置为overflow:hidden

  + ```html
    <div class="box">
           <div class="box1_father"> 
                 <div class="box1"></div>
            </div>
            <div class="box2"> </div>
    </div>
    
      <style>
        .box{
            background-color: pink;
            height: 500px;
        }
        .box1{
            background-color: red;
            height: 100px;
            width: 200px;
            margin-bottom: 20px;
        }
        .box2{
            background-color: green;
            height: 100px;
            width: 200px;
            margin-top: 30px;
        }
        .box1_father{
            overflow: hidden;
        }
       </style>
    ```

+ 2.防止字体环绕

  + ```html
     <div class="box">
                <div class="left"></div>
                <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                </p>
            </div>
            
          <style>
            .box{
                width: 200px;
            }
            .left {
                float: left;
                width: 100px;
                height: 100px;
                background-color: yellow;
            }
            p {
                background-color: green;
                overflow: hidden;
            }
          
        </style>    
    ```

##### 为什么要学bfc 因为要拿来清除浮动

+ 清除浮动一般有两种思路

  + 1.利用clear属性 清除浮动
  + 2.使父容器形成BFC

+ 利用clear属性来清除浮动的两种方法

+  解决浮动元素令父元素高度塌陷的问题

  + 1.在子元素最后加一个空元素 设置为clear:both

    + 不足：增加了一个无意义的标签
    
    + ```html
      <div class="container">
            <div class="p">
                <div class="c"></div>
                <div class="c"></div>
                <div class="c"></div>
        		//新增用来清除浮动的空元素        
           	 <div class="clear"></div>      
            </div>
        </div>
      <style>
             
             .container{
                 margin: 30px auto;
                 width:600px;
                 height: 300px;
             }
             .p{
                 border:solid 3px #a33;
             }
             .c{
                 width: 100px;
                 height: 100px;
                 background-color: #060;
                 margin: 10px;
                 float: left;
         }
            .clear{
                  clear: both;
              }
         </style>
      ```
    
  + 使用伪类来清除浮动  给p增加一个伪类
  
    + 优点：不会增加无意义标签，
  
    + 缺点：代码复用性不高
  
    + ````html
      <div class="container">
            <div class="p">
                <div class="c"></div>
                <div class="c"></div>
                <div class="c"></div>   
            </div>
        </div>
      <style>
             
             .container{
                 margin: 30px auto;
                 width:600px;
                 height: 300px;
             }
             .p{
                 border:solid 3px #a33;
             }
             .c{
                 width: 100px;
                 height: 100px;
                 background-color: #060;
                 margin: 10px;
                 float: left;
             }
          .p::after{
              content:"";
              clear:both;
              display:block;
              visibility:hidden;
              height:0;
          }
          
         </style>
      ````
  
    + 