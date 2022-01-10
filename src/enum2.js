"use strict";
function render(result) {
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
            sex: 'female',
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
let chars = ['A', 'B'];
let aa = {
    0: '2',
    1: '4',
};
let bb = {
    aa: '2',
    bb: '4',
};
