### TS 环境搭建

### ES6 的数据类型

- 6 种数据类型 Boolean Number String Array Function Object Symbol undefined null

### TypeScript 的数据类型

- 基本类型 void any never 元组
- 枚举类型（一组有名字的常量集合）
  - 数字枚举
  - 字符串枚举
  - 常量枚举

### 语法

- (变量/函数):type

### 枚举类型

将程序中不容易记忆的硬编码，或者在未来可能改变的常量，抽取出来，定义成枚举类型。这样可以提高程序的可读性和可维护性，以不变应万变

```
function initByRole(role){
  if(role === 1 || role === 2){
     //do sth
  }else if(role === 3 ||role === 4) {
     //do sth
  }else if(role === 5) {
     //do sth
  }else {
     //do sth
  }
}
```

用枚举类型改写

```
const enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
function initByRole(role: Role){
  if(role.Reporter === 1 || role.Developer === 2){
     //do sth
  }else if(role.Maintainer === 3 || role.Owner === 4) {
     //do sth
  }else if(role.Guest === 5) {
     //do sth
  }else {
     //do sth
  }
}

```
