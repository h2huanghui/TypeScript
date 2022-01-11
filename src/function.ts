//函数定义
function add1(x: number, y: number) {
  return x + y;
}

let add_2: (x: number, y: number) => number;

type add_3 = (x: number, y: number) => number;

interface add_4 {
  (x: number, y: number): number;
}

// add1(1, 2, 3);

//可选参数，可选参数必须在必选参数后
function add_5(x: number, y?: number) {
  return y ? x + y : x;
}

//函数参数默认值
function add_6(x: number, y = 0, z: number, p = 1) {
  return x + y + z + p;
}
console.log(add_6(1, undefined, 2));

//函数参数个数不确定
function add_7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}

console.log('add_7====', add_7(1, 2, 3, 4, 5));

//函数重载
function add_8(...rest: number[]): number;
function add_8(...rest: string[]): string;
function add_8(...rest: any): any {
  let first = rest[0];
  if (typeof first === 'string') {
    return rest.join('');
  }
  if (typeof first === 'number') {
    return rest.reduce((pre: any, cur: any) => pre + cur);
  }
}

console.log('函数重载：', add_8(1, 2, 3));
console.log('函数重载：', add_8('a', 'b', 'c'));
