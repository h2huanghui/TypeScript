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

  - 通过变量声明

  ```
  let add: (x: number, y: number) => number;
  ```

  - interface 定义： 创建新的类型，接口之间还可以继承、声明合并

  ```
    interface Add {
       (x: number, y: number): number;
    }
  ```

  - type 定义： 不是创建新的类型，只是为一个给定的类型起一个名字

  ```
  type Add = (x: number, y: number) => number;

  ```

- 4.6 函数知识点梳理

  - 函数定义
  - 函数参数可选
  - 函数参数默认值
  - 函数参数个数不确定
  - 函数重载

- 4.7 类： 继承和成员修饰符

  - class

  ```
  //构造函数中定义的是参数的类型，而不是类成员的类型
  class A {
    constructor(x: string) {
        this.name = x
    }
    name: string;
  }
  ```

  - 类修饰符

1. public: 所有人可见（默认）。
2. private: 只能被类本身调用，不能被类的实例调用，也不能被子类调用。
3. protected: 只能在类或类的子类中调用。
4. readonly: 只读。
5. static: 静态属性，可以被类或类的子类调用，不能被实例调用

- 抽象类和多态

  - 抽象类只能被继承，不能创建实例
  - 在抽象类中，可以定义方法，它可以有自己的实现，这样就可以实现方法的复用；也可以不指定方法的具体实现，就构成了一个抽象方法,优点是可以明确知道子类可以有自己的实现,有利于代码的扩展
  - 多态：不同的对象访问不同的方法
  - this： 成员方法直接返回 this,方便链式调用

- 类与接口的关系
  ![avatar](/src/public/imgs/interface_class.png)

- 泛型： 不预先确定的数据类型，具体的类型在使用的时候才能确定
