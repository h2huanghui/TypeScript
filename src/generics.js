"use strict";
function log1(value) {
    console.log(value);
    return value;
}
//泛型函数改造
function log2(value) {
    console.log(value);
    return value;
}
//调用泛型函数
log2(['a', 'b']);
log2(['ac', 'bc']);
let myLog = log2; //泛型函数实现
let myLog2 = log2; //函数定义时，需要指定一个类型
myLog2(1);
let myLog3 = log2;
myLog3('a');
