"use strict";
let add_01;
let add_test = (a, b) => a + b;
//需要使用类型断言
let lib = (() => { });
lib.version = '1.0'; //问题是对全局暴露了一个属性，解决方法是封装在一个函数里面
lib.doSomething = () => { };
function getLib() {
    let lib = (() => { });
    lib.version = '1.0';
    lib.doSomething = () => { };
    return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
