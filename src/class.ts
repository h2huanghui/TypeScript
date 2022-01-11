//ts类基本实现
class Dog {
  //相比ES6,TS多了为构造函数参数增加类型注解
  //如果用private修饰构造函数，既不能实例化，也不能继承
  //如果用protected修饰构造函数，不能实例化，只能继承
  constructor(name: string) {
    this.name = name; //实例属性
  }
  public name: string; //默认public,这里显式调用
  run() {} //原型方法
  private pri() {}
  protected pro() {}
  readonly legs: number = 4;
  static food: string = 'bones'; //静态成员变量只能通过类来访问，也可以被继承
}

console.log('prototype==', Dog.prototype); //原型上只有构造函数和方法
let dog = new Dog('wangwang'); //如果构造函数为private或者protected，不能被实例化
console.log('实例===', dog); //实例属性
// dog.pri()
// dog.pro();
console.log(Dog.food);

//类的继承（如果构造函数为private，不能被继承）
class HusKy extends Dog {
  constructor(name: string, public color: string) {
    //派生类的构造函数必须包含 "super" 调用
    super(name);
    this.color = color;
    // this.pri()
    this.pro();
  }
  // color: string; //如果构造函数的参数被设置为public，就说明是实例的属性，这行代码可以省略
}
console.log(HusKy.food); //继承的子类可以访问到static成员变量

//类的成员修饰符 public private protected(只能在类和子类中访问，不能在实例中访问) readonly static
