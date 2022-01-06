//数字枚举，反向映射
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
console.log(Role.Reporter);
console.log(Role); //被编译成一个对象

//字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了',
}

// 异构枚举, number和字符串并存
enum Answer {
  N,
  Y = 'Yes',
}

//枚举成员
//枚举成员的值是只读类型，定义了之后是不可以修改的
// Role.Reporter = 2

//枚举成员的分类
enum Char {
  //const 常量枚举 1. 没有初始值，2. 对已有枚举成员的引用， 3. 常量表达式
  a,
  b = Char.a,
  //computed Member(不会在编译阶段被计算，会被保留到执行阶段)
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length,
}

console.log(Char);

//常量枚举(编译阶段会直接被移除)
const enum Month {
  Jan,
  Feb,
  Mar,
}

let month = [Month.Jan, Month.Feb, Month.Mar]; //枚举直接会变成常量

//枚举类型
enum E {
  a,
  b,
}

enum F {
  a = 0,
  b = 1,
}

enum G {
  a = 'apple',
  b = 'banana',
}

//把任意的number类型赋值给枚举类型,两种不同类型的枚举是不可以进行比较的
let e: E = 3;
let f: F = 3;
// e === f

let e1: E.a = 1;
let e2: E.b;
// e1 === e2
let e3: E.a = 1;
//e1 和e3可以比较，因为都指向一个成员属性
// e1 === e3

//字符串枚举，取值只能是枚举成员的类型
let g1: G = G.b;
let g2: G.a = G.a;
