##### 伪类和伪元素的区别

+ 伪元素使用两个::常见的有  ::before ::after
+ 伪类使用一个冒号，:hover :link :active
+ 伪元素添加了一个页面中没有的元素（只是从视觉效果上添加了，不是在文档树种添加）
+ 伪类是给页面中存在的元素添加一个类



##### em与rem的区别

+ em是相对于父元素的font-size

  + 如果没有设计 就按照浏览器的默认大小 16px

  + 子元素继承父元素的fontsize

    + ```html
         <style>
              div{
                  font-size: 10px;
                  width: 20em;
                  height: 20em;
                  border: 1px solid black;
              }
              p{
                  font-size: 2em; //20px
                  width: 10em;
                  height: 5em;
                  border: 1px solid green;
              }
              span{
                  font-size: 2em; //40px
                  width: 10em;
                  height: 10em;
                  border: 1px solid pink;
              }
      
          
              </style>
      </head>
      <body>
      
          <div >
              我是父元素div
              <p>
                  我是子元素p
                  <span>我是孙元素span</span>
              </p>
          </div>
      ```

+ rem 是相对于html的font-size 不是相对于父元素 

  