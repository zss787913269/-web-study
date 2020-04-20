

##### SpringBoot整合Spring Data JPA

+ 添加Spring Data JPA的起步依赖

  + ```xml
    <!-- springBoot JPA的起步依赖 -->
    <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    ```

+ 添加数据库驱动依赖

  + ```xml
    <!-- MySQL连接驱动 -->
    <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    </dependency>
    ```

+ 在application.properties中配置数据库和jpa的相关属性

  + ```properties
    #DB Configuration:
    spring.datasource.driverClassName=com.mysql.jdbc.Driver
    spring.datasource.url=jdbc:mysql://127.0.0.1:3306/test
    spring.datasource.username=root
    spring.datasource.password=root
    #JPA Configuration:
    spring.jpa.database=MySQL
    spring.jpa.show-sql=true
    spring.jpa.generate-ddl=true
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.hibernate.naming_strategy=org.hibernate.cfg.ImprovedNamingStrategy
    
    ```

+ 创建实体配置实体

  + ```java
    @Entity
    public class User {
    // 主键
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // 用户名
    private String username;
    // 密码
    private String password;
    // 姓名
    private String name;
    //此处省略setter和getter方法... ...
    }
    ```

+ 编写UserRepository  这是一个interface接口

  + ```java
    public interface UserRepository extends JpaRepository<User,Long>{
    	
    }
    ```

+ 创建一个service层写业务代码

  + ```java
    package com.example.demo.service;
    
    import com.example.demo.entity.User;
    import com.example.demo.repository.UserRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Service;
    
    import java.util.List;
    
    @Service
    public class UserService {
        @Autowired
        private UserRepository userRepository;
    
        public  List<User>  findall(){
            List<User> all =  userRepository.findAll();
            return  all;
        }
    
    }
    
    ```

+ 创建一个controller来控制路由请求

  + ```java
    package com.example.demo.controller;
    
    import com.example.demo.entity.User;
    import com.example.demo.repository.UserRepository;
    import com.example.demo.service.UserService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;
    
    import java.util.List;
    
    @RestController
    public class QuickController {
    
        @Autowired
        private UserService userService;
    
    
        @RequestMapping("/hello")
        public String quick(){
            return "123sada";
        }
    
    
    
        @RequestMapping("/he")
        public List<User> test(){
            return userService.findall();
        }
    
    }
    
    ```

+ 配置热更新

  + ```xml
    <!--热部署配置-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
    </dependency>
    ```

  + 左上角依次找到【File】——【Settings...】——【Build,Execution,Deployment】——【Compiler】，

    勾选"Build project automatically",然后右下角【Apply】——【OK】



##### 获取请求头的参数，与指定post请求与GET请求,与请求头

+ ```java
  @RequestMapping(value = "/inster",method = RequestMethod.POST)
    public String inster(@RequestBody String body, @RequestHeader(value = "token") String token){
        System.out.println("token1"+token);
        return userService.inster(body);
    }
    
    @RequestMapping(value = "/findAll",method = RequestMethod.GET )
    public List<User> findAll(){
        return userService.findAll();
    }
  ```


```

```

