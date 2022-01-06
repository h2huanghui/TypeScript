"use strict";
//语法：(变量/函数): type
//原始类型
let bool = true;
let num = 123;
let str = 'abc';
//变量的数据类型是不可改变的
// str = 123;
//数组
let arr1 = [1, 2, 3];
let arr2 = [1, 2];
//联合类型
let arr3 = [1, 2, 3, '3'];
//元组
let tuple = [0, '1'];
//可以通过push方法为元组添加新元素，但仍然不能进行越界访问。实际开发过程中，不建议这样使用
// tuple.push(2);
// console.log(tuple);
// tuple[2]; //报错
//函数，为函数参数加上类型注解
let add = (x, y) => x + y;
//括号之后，也可以加上函数返回值的类型,通常返回值类型是可以省略的，利用的ts的类型推断功能
let add2 = (x, y) => x + y;
//函数定义
let compute;
//函数实现
compute = (a, b) => a + b;
//对象
let obj = { x: 1, y: 2 };
//在js中，修改对象的属性，但是在ts中是不允许的。因为我们没有定义具体属性值的类型
// obj.x = 3; //错误
let obj2 = { x: 1, y: 2 };
obj2.x = 3;
//symbol(具有唯一的值)
let s1 = Symbol(); //显示声明
let s2 = Symbol(); //简单创建
console.log(s1 === s2); //结果不相等
//undefined, null
let un = undefined; //不能被赋值为任何其他类型
let nu = null;
//把undefined和null赋值给num,将tsconfig.json里面的strictNullChecks设置为false,就可以赋值了
num = undefined;
num = null;
//void(在js中void是一个操作符,比如void 0 返回的就是undefined,自定义undefined覆盖全局的undefined)
let noReturn = () => { };
//any,和js无任何区别,不建议使用
let x;
x = 1;
x = [];
x = () => { };
//never，永远不会有返回值的类型
let error = () => {
    throw new Error('error');
};
let endless = () => {
    while (true) { }
};
//枚举
