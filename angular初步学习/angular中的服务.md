##### 什么是服务

+ angular中的服务相当于一个状态管理，可以将数据放在服务里面进行获取以及编辑。

##### 如何使用服务

+ 创建一个公用服务

  ```
  ng g service service/common
  ```

+ 在需要的页面引入

  + ```
    import { CommonService} from "../../service/common.service"
    ```

+ 在构造函数中声明 

  + ```
     constructor(public common:CommonService) {}
    ```

+ 使用this.common调用服务里面的数据于方法

