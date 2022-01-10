interface List {
  readonly id: number;
  name: string;
  age?: number; //可选属性
  // [x: string]: any; //字符串索引签名[用任意的字符串去索引List,可以得到任意的结果]
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
    // value.id++; //尝试修改，只读属性不允许修改
  });
}

let result = {
  data: [
    {
      id: 1,
      name: 'hh',
      sex: 'female', //后端返回多一个字段，ts并没有报错（动态语言类型风格）
      age: 2,
    },
    {
      id: 2,
      name: 'lvh',
    },
  ],
};

// render({
//   data: [
//     {
//       id: 1,
//       name: 'hh',
//       sex: 'female',
//       age: 2,
//     },
//     {
//       id: 2,
//       name: 'lvh',
//     },
//   ],
// });

render(result);

interface StringArray {
  [index: number]: string; //用任意的数字去索引StringArray,都会得到一个string。相当于声明了一个字符串数组
}

let chars: StringArray = ['A', 'B'];

interface Names {
  [x: string]: string; //用任意的字符串去索引Names,得到的结果都是string。这样声明之后，就不能声明number类型了
  // y: number
  [z: number]: string; //既可以用数字去索引Names，也可以用字符串去索引Names
}

let aa: Names = {
  0: '2',
  1: '4',
};

interface Names2 {
  [x: string]: any;
  // y: number
  [z: number]: number;
}

let bb: Names2 = {
  aa: '2',
  bb: '4',
};
