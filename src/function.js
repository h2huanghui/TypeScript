"use strict";
//函数定义
function add1(x, y) {
    return x + y;
}
let add_2;
// add1(1, 2, 3);
//可选参数，可选参数必须在必选参数后
function add_5(x, y) {
    return y ? x + y : x;
}
//函数参数默认值
function add_6(x, y = 0, z, p = 1) {
    return x + y + z + p;
}
console.log(add_6(1, undefined, 2));
//函数参数个数不确定
function add_7(x, ...rest) {
    return x + rest.reduce((pre, cur) => pre + cur);
}
console.log('add_7====', add_7(1, 2, 3, 4, 5));
function add_8(...rest) {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}
console.log('函数重载：', add_8(1, 2, 3));
console.log('函数重载：', add_8('a', 'b', 'c'));
