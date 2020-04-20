#### angular组件的创建

+ ```js
  ng g module pages/zym 
  ```

  + 在app/src 下面的pages文件夹下面创建一个zym的模块

+ ```
   ng generate component pages/zym 
  ```

  + 创建zym的组件 并会自动注册到zym模块中

  + zym.model.ts文件代码  

    + ```js
      import { NgModule } from '@angular/core';
      import { CommonModule } from '@angular/common';
      import { ZymComponent } from './zym.component';
      
      
      
      @NgModule({
        declarations: [ZymComponent],
        imports: [
          CommonModule
        ],
        exports:[ZymComponent]////记得exports导出组件，这段话要自己配置
      })
      export class ZymModule { }
      
      ```

    + //记得把app.module的删除

+ 创建一个index.ts文件 导出模块  

  + ```js
    export * from './zym.module'
    ```

  + 也可以不创建 直接在main.module.ts中引入zym模块

  + ```js
    import { ZymModule } from '../zym/zym.module'
    
    ```

  + 如果创建了index.ts文件

  + ```js
    import { ZymModule } from '../zym'
    ```

+ 在main.html中使用组件即可

  + 组件名在zym.component.ts中

    + ```js
      import { Component, OnInit } from '@angular/core';
      @Component({
        selector: 'app-zym', //组件名，在页面的时候要按照这个名字
        templateUrl: './zym.component.html',
        styleUrls: ['./zym.component.css']
      })
      export class ZymComponent implements OnInit {
        constructor() { }
        ngOnInit(): void {
        }
      }
      ```

      