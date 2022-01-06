"use strict";
//数字枚举，反向映射
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
console.log(Role.Reporter);
console.log(Role); //被编译成一个对象
//字符串枚举
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
// 异构枚举, number和字符串并存
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
//枚举成员
//枚举成员的值是只读类型，定义了之后是不可以修改的
// Role.Reporter = 2
//枚举成员的分类
var Char;
(function (Char) {
    //const 常量枚举 1. 没有初始值，2. 对已有枚举成员的引用， 3. 常量表达式
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    //computed Member(不会在编译阶段被计算，会被保留到执行阶段)
    Char[Char["c"] = 4] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
})(Char || (Char = {}));
console.log(Char);
let month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */]; //枚举直接会变成常量
//枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
//把任意的number类型赋值给枚举类型,两种不同类型的枚举是不可以进行比较的
let e = 3;
let f = 3;
// e === f
let e1 = 1;
let e2;
// e1 === e2
let e3 = 1;
//e1 和e3可以比较，因为都指向一个成员属性
// e1 === e3
//字符串枚举，取值只能是枚举成员的类型
let g1 = G.b;
let g2 = G.a;
