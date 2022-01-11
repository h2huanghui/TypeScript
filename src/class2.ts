abstract class Animal {
  eat() {
    console.log('eat');
  }
  abstract sleep(): void;
}

// let animal = new Animal()

class Sheep extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {}
  sleep() {
    console.log('sheep sleep');
  }
}
let sheep = new Sheep('mememe');
sheep.eat();

class Cat extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  sleep() {
    console.log('cat sleep');
  }
}
let cat = new Cat('miaow');

let animals: Animal[] = [sheep, cat];
animals.forEach((i) => {
  i.sleep();
});

class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new WorkFlow().step1().step2(); //链式调用

class Myflow extends WorkFlow {
  next() {
    return this;
  }
}

new Myflow().next().step1().next().step2(); //this多态
