## 1. 简单的 useState - Counter 计数器示例 HookCounter

### 1.1 Hooks 的使用规则

- 只能在顶层作用域调用 Hooks
  - 不能在内部的循环、条件判断、嵌套的方法中使用
- 只能在 React Function 里使用 Hooks
  - 不能在其他普通的 function 中使用 Hooks

## 2. useState with Previous State

### 2.1 小结

- 使用 previousState 时，要使用 setter function 的方式，传参给 setState 方法。来确保拿到的是准确的 previous state。
- 在重新渲染中，useState 返回的第一个值将始终是更新后最新的 state。

## 3. useState with Object

- 当 useState 中的 state 为对象时，调用相应的 setState 有一些要注意的地方，useState 不会自动合并更新对象，你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。

### 3.1 小结

- state hook 中操作对象时，不会自动合并对象中的属性，需要我们手动来合并，可以运用展开运算符。

### 4. useState with Array

数组和对象类似的

## 5. 小结

- 可以在函数式组件中使用 state
- 在类组件中，state 是一个对象，但是 useState 中，state 可以不是对象，可以是任何类型
- useState 返回 2 个元素的数组

* 第一个是 state 的当前值
* 第二个是 state 的 setter 方法，调用时会触发 rerender

  - 若当前的 state 依赖 previous state，可以传入一个函数到 state 的 setter 方法中，入参为 previous state，返回新的 state

* 对于对象和数组，注意 state 中不会自动补全旧的变量，需要使用展开运算符自己手动补充
