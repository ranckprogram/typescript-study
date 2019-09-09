# typescript-study
typescript-study


```
tsc index.ts --watch
```

###  变量校验

- String
- boolean
- Number
- Object


### 通过定义接口的方式来规范函数

- 规范函数的入参和返回类型

### 接口

- 关键字 interface 
- 用于定义类的结构，其中不做具体实现
- 使用 implements 实现
- 命名 IStudent 或 studentInterface
- 可继承 也可 被继承


### 模块

- export 可以导出任何申明
- 可用as重命名
- import 导入
- 目前浏览器还是不能很好的的处理es6语法因此还需要转成es5，通过browerify或者其他方式 tsconfig.json
- 只有一个class或者function时候考虑使用 export default，使用export default 导出的模块 不需要在 { } 里面

### typescript 工程化

typescript 是个不错的工具，在开发可维护代码方面有其独到之处。此外单独只有typescript还达不到工程化级别，因此还有必要使用gulp或其他的工具来处理一些自动化流程，以及合理的项目结构