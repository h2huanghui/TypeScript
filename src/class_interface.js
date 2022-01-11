"use strict";
//类实现接口，必须声明接口中所有的属性
class Asian {
    constructor(name) {
        this.name = name;
    }
    eat() { }
    sleep() { }
}
let boy = {
    name: '',
    eat() { },
    run() { },
    cry() { },
};
//接口继承类
class Auto {
}
class C {
}
class Bus extends Auto {
}
