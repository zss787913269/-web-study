##### 项目的创建

+ nest 脚手架的使用

  + ```javascript
    $ npm i -g @nestjs/cli
    $ nest new project-name
    ```

+ 基础项目分析

  + ```javascript
    	app.controller.ts
     	app.module.ts
      	main.ts
    ```

  + main.ts应用程序的条目文件。它用于nestFactory创建应用程序实例

  + app.module.ts 定义appModule应用程序的根模块

  + app.controller.ts 具有单一路线的基本控制器样本

+ main.ts目录分析

  + ```javascript
    import { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';
    
    async function bootstrap() {
      const app = await NestFactory.create(AppModule);
      await app.listen(3000);
    }
    bootstrap();
    
    ```

##### 控制器（controller）

+ 控制器负责处理传入的请求并将响应返回给客户端
+ 每个控制器具有多个路由 并且不同的路由可以执行不同的动作
+ 创建一个基本的控制器 我们使用类和装饰器。装饰器将类与所需的元数据相关联，并使Nest能够创建路由映射（将请求绑定到相应的控制器）
+ 在Controller装饰器中使用前缀允许我们避免在路径可能共享公共前缀时重复自己



+ controller主要写路由  service服务里面写方法 controller可以直接调用

##### 装饰器 

+ 创建一个装饰器

  + ```shell
    nest g controller article
    ```

+ 装饰器为 @Controller('article')  装饰器里面的 "article"就是我们的路由

+ 在新建的装饰器里面添加方法

  + ```js
    
        @Get('add')
        index(){
            return '我是一个文章页面'
        }
    
    ```

  + 在浏览器输入 localhost:3000/article/add就可以访问  @Get()方法不写参数 默认访问localhost:3000/article

+ 通过Query装饰器 获取get传值

  + ```js
     @Get("add")
        addData(@Query() query){
            console.log(query)
            return query
        }
    http://localhost:3000/user/add?name=123
    
    ```

+ 使用@Body中间件获取参数

  + ```js
    
        @Post('create')
        create(@Body() data){
    
            console.log(data)
            return '我是post方法'
        }
    ```

  + 在Postman中localhost:3000/user/create  

+ 使用@Param来获取动态路由

  + ```js
     @Get(":id") 
        zss(@Param() par){
            console.log(par)
            return "这是新闻页面"
        }
    
    http://localhost:3000/user/123
    ```

+ 控制台会输出{ id: '123' }



##### 配置静态资源

+ 引入模块 

  + ```js
    import { NestExpressApplication } from '@nestjs/platform-express'
    ```

+ 在create方法中引入

  + ```js
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    ```

+ 配置静态资源

  + ```
    app.useStaticAssets('public')
    ```

+ 在浏览器输入<http://localhost:3000/1.jpg> 就可以访问成功

##### 设置虚拟目录

+ ```js
    app.useStaticAssets('public',{
      prefix:'/static/'
    })
  ```

  

​    