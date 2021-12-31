//语法：(变量/函数): type

//原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = 'abc';

//变量的数据类型是不可改变的
// str = 123;

//数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '3'];

//元组
let tuple: [number, string] = [0, '1'];
// tuple.push(2);
// console.log(tuple);
// tuple[2];

//函数
let add = (x: number, y: number) => x + y;

let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

//对象
let obj: object = { x: 1, y: 2 };

//symbol
let s1: symbol = Symbol();
let s2 = Symbol();

//undefined, null
let un: undefined = undefined;
let nu: null = null;

//void

//any

//never

//枚举
