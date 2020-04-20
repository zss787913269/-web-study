## apidoc的用法

+ 1.apidoc -i src/student -o  public/apidoc

  + ```
    npm install apidoc -g
    ```

+ 在你的项目根目录下新建**apidoc.json**文件，该文件描述了项目对外提供接口的概要信息如名称、版本、描述、文档打开时浏览器显示标题和接口缺省访问地址。
   [apidoc.json](http://apidocjs.com/source/example_full/apidoc.json)

  ```json
  {
    "name": "ServiceEbikeAPIs",
    "version": "3.1.0",
    "description": "车辆服务接口文档",
    "title": "ServiceEbikeAPIs",
    "url" : "http://cjl3.rokyinfo.net:7190/api-ebike"
  }
  ```

+ 3.写注释

  + ```js
     * 登录接口
     * @api {GET} /api/users/:id 获得某个用户
     * @apiDescription 根据数据库判断是否有这个人的存在
     * @apiName login
     * @apiParam (path参数) {Number} account
     * @apiParam (path参数) {Number} password
     * @apiSampleRequest /api/users/5a45cefd080d7c39a036ca55
     * @apiGroup User
     * @apiVersion 1.0.0
     */
    ```

+ 4.扫描注释变成文档

  + ```
    apidoc -i src/student -o  public/apidoc
    
    
    src/student 注释的的文件在哪里 
    public/apidoc 生成的文件放在哪个文件夹里
    ```

  + 