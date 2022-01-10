let add_01: (x: number, y: number) => number;

// interface Add {
//   (x: number, y: number): number;
// }

//类型别名
type Add_02 = (x: number, y: number) => number;

let add_test: Add_02 = (a, b) => a + b;

//定义混合接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

//需要使用类型断言
let lib: Lib = (() => {}) as Lib;
lib.version = '1.0'; //问题是对全局暴露了一个属性，解决方法是封装在一个函数里面
lib.doSomething = () => {};

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();

let lib2 = getLib();
