//接口只能约束类的公有成员
interface Human {
  name: string;
  eat(): void;
}
//类实现接口，必须声明接口中所有的属性
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
  sleep() {}
}

//接口继承接口
interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  eat() {},
  run() {},
  cry() {},
};

//接口继承类
class Auto {
  state: 1;
  // private state2: 2
}
interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state: 1;
}

class Bus extends Auto implements AutoInterface {}
