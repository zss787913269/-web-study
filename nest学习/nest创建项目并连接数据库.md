#### nest连接数据库

##### 第一步：下载typeorm

+ ```json
   npm install --save @nestjs/typeorm typeorm mysql
  ```

+ 

##### 第一步：创建实体文件夹

+ 在src下面创建一个dao文件夹  用来保存表文件(实体文件)

  + ```
    import { Entity, PrimaryGeneratedColumn, Column,BaseEntity } from "typeorm";
    
    @Entity()
    export class studenAge {
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        firstName: string;
    
        @Column()
        lastName: string;
    
        @Column()
        age: number;
      
    }
    
    ```

##### 第三步：创建模块

+ 在src下面创建一个student文件夹 用来保存 学生的module 学生的service 和学生的控制器controller

  + ```
    nest g module student
    nest g controller student
    nest g service student
    ```

+ service主要用来操作数据库  controller主要用来写路由

  + service.ts

    + ```javascript
      import { Injectable } from '@nestjs/common';
      import { Repository } from 'typeorm';
      import {users} from '../dao/user.entity'
      import { InjectRepository } from '@nestjs/typeorm';
      
      @Injectable()
      export class StudentService {
          constructor(
              @InjectRepository(users)
              private readonly photoRepository: Repository<users>,
            ) {}
          
      
          findAll(){ 
                  
          
              return  this.photoRepository.find();
      
              // let msg = new users()
              // msg.firstName = 'asds'
              // msg.lastName = 'ljs'
              // msg.age = 123
      
              // this.photoRepository.save(msg)
          }
      }
      ```

  + controller.ts

    + ```javascript
      import { Controller, Get } from '@nestjs/common';
      import { StudentService } from './student.service';
      
      @Controller('student')
      export class StudentController {
          constructor(private readonly studentService: StudentService) {}
          @Get()
          index(){
              return this.studentService.findAll()
          }
      }
      ```

  + module.ts

    + ```javascript
      import { Module } from '@nestjs/common';
      import {StudentService} from './student.service'
      import {StudentController} from './student.controller'
      import { TypeOrmModule } from '@nestjs/typeorm';
      import {users} from '../dao/user.entity'
      import {studenAge} from '../dao/studen.entity'
      
      @Module({
          imports:[TypeOrmModule.forFeature([users,studenAge])],
          controllers:[StudentController],
          providers:[StudentService]
      })
      export class StudentModule {}
      
      ```

+ 在app中引入student模块 并连接数据库

  + ```javascript
    import { Module } from '@nestjs/common';
    import { AppController } from './app.controller';
    import { AppService } from './app.service';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { Connection } from 'typeorm';
    import { users } from './dao/user.entity'
    import { studenAge } from './dao/studen.entity'
    import {StudentModule} from './student/student.module'
    
    
    @Module({
      imports: [  
      TypeOrmModule.forRoot({
        type:'mysql',
        port:3306,
        username:'root',
        host:'192.168.31.216',
        password:'123456',
        database:'plugin',
        entities:[users,studenAge],
        synchronize:true
      }),StudentModule],
      controllers: [AppController],
      providers: [AppService],
    })
    export class AppModule {
      constructor(private readonly connection:Connection){}
    }
    
    ```

  + 