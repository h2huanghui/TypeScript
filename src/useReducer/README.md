## 1. 什么是 useReducer

是 useState 的替代方案, useReducer 和 useState 的区别是,useState 是使用 useReducer 构建的

### 1.1 reduce 方法

- reduce() 方法对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值。

```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```

- reduce 方法接受 2 个参数，第一个为 reducer 函数，第二个为初始值（给 reducer 函数使用）。reduce 方法返回函数累计处理的结果

* reducer 函数有 2 个必填入参

  - accumulator 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或 initialValue。
  - currentValue 数组中正在处理的元素。

| reduce in JavaScript                          | useReducer in React                                       |
| --------------------------------------------- | --------------------------------------------------------- |
| array.reduce(reducer, initialValue)           | useReducer(reducer, initialState)                         |
| singleValue = reducer(accumulator, itemValue) | newState = reducer(currentState, action)                  |
| reduce method returns a single value          | useReducer returns a pair of values. [newState, dispatch] |

## 2.simple state & action

state 是一个 number 类型，action 也是简单的 string 类型

## 3.complex state & action

将 state 和 action 都改写为对象

- 优点
  - 有多个属性决定 action 的效果。例如，再添加一个+5 的逻辑
  - state 作为一个对象，就可以添加更多的 state 属性, 例如，再增加一个计数器 2

## 4.multiple useReducers

如果有多个 state，但 state 变化的方式又是相同的时候，可以多次使用 useReducer。

- 优点
  - 提高了代码的复用性

## 5. Fetching Data with useReducer

### 5.1 useState

使用了 3 个 useState 去控制 loading, post 和 error

### 5.2 useReducer

将 state 集合在了一起，在同一个对象，修改 state 的逻辑也聚合在了一起，即 reducer 函数中的 switch 部分

## 6. useState vs useReducer

- 如果 state 的类型为 Number, String, Boolean 建议使用 useState，如果 state 的类型 为 Object 或 Array，建议使用 useReducer
- 如果 state 变化非常多，也是建议使用 useReducer，集中管理 state 变化，便于维护
- 如果 state 关联变化，建议使用 useReducer
- 业务逻辑如果很复杂，也建议使用 useReducer
- 如果 state 只想用在 组件内部，建议使用 useState，如果想维护全局 state 建议使用 useReducer
