### 1.TS 环境搭建

### 2.ES6 的数据类型

- 6 种数据类型 Boolean Number String Array Function Object Symbol undefined null

### 3.TypeScript 的数据类型

- 基本类型之外，还有 void any never 元组
- 枚举类型（一组有名字的常量集合）
  - 数字枚举
  - 字符串枚举
  - 常量枚举

#### 3.1 语法

- (变量/函数):type

#### 3.2 枚举类型优点以及示例

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

### 4.接口

- 4.1 接口约束： 对象、函数、类的结构
- 4.2 关键字是 interface
- 4.3 后端如果返回多一些字段，ts 正常的兼容的，除非直接传入的是对象字变量，ts 会检查

  - 解决办法一：把对象字变量赋值给一个变量
  - 解决办法二：使用类型断言 `as`
  - 解决办法三： 字符串索引签名

```
//类型断言as
render({
data: [
{
id: 1,
name: 'hh',
age: 2,
},
{
id: 2,
name: 'lvh',
},
],
} as Result);
```

或者

```
// <>(但是不建议使用，在 react 里面会产生混淆)
render(<Result>{
  data: [
    {
      id: 1,
      name: 'hh',
      sex: 'female',
      age: 2,
    },
    {
      id: 2,
      name: 'lvh',
    },
  ],
});

```

```
interface List {
  readonly id: number; //只读属性
  name: string;
  age?: number; //可选属性
  [x: string]: any; //字符串索引签名[用任意的字符串去索引List,可以得到任意的结果]
}
```

- 4.4 可索引接口

  - 数字索引
  - 字符串索引

- 4.5 函数类型接口
