function log1(value: any): any {
  console.log(value);
  return value;
}

//泛型函数改造
function log2<T>(value: T): T {
  console.log(value);
  return value;
}

//调用泛型函数
log2<string[]>(['a', 'b']);
log2(['ac', 'bc']);

//使用类型别名，定义一个泛型函数类型
type Log = <T>(value: T) => T;
let myLog: Log = log2; //泛型函数实现

//等价于类型别名
interface Log2<T> {
  (value: T): T;
}

let myLog2: Log2<number> = log2; //函数定义时，需要指定一个类型
myLog2(1);

//在接口定义时指定默认类型
interface Log2<T = string> {
  (value: T): T;
}
let myLog3: Log2 = log2;
myLog3('a')
