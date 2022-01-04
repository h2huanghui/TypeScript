## 1. 为什么使用 UseEffect

### 1.1 react 中旧的生命周期可能会有副作用，比如页面的 title 要展示点击次数时，代码如下：

```
componentDidMount() {
  document.title = `${this.state.count} times`
}
componentDidUpdate() {
  document.title = `${this.state.count} times`
}

```

在 componentDidMount 和 componentDidUpdate 中都写了同样的代码，我们不能在组件的生命周期中挂载一次，这就导致了代码重复的问题

### 1.2 页面中包含了倒计时，并且在页面销毁时要清除倒计时 timer

```
componentDidMount() {
  this.interval = setInterval(this.tick, 1000)
}
componentWillUnmount() {
  clearInterval(this.interval)
}

```

### 1.3 如果这个组件比较复杂，同时包含了上述的两种逻辑

```
componentDidMount() {
  document.title = `${this.state.count} times`
  this.interval = setInterval(this.tick, 1000)
}
componentDidUpdate() {
  document.title = `${this.state.count} times`
}
componentWillUnmount() {
  clearInterval(this.interval)
}

```

代码重复。设置标题的代码重复了 1 遍;代码分散。逻辑看起来就分散在了组件生命周期的各个地方

### 1.4 小结 useEffect 解决的问题

- EffectHook 用于函数式组件中副作用，执行一些相关的操作，解决上述的问题
- 可以认为是 componentDidMount, componentDidUpdate, componentWillUnmount 的替代品

## 2. 有条件地执行 useEffect

## 3.只执行 1 次 useEffect

### 3.1 小结
* 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。
* 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值。尽管传入 [] 作为第二个参数更接近大家更熟悉的 componentDidMount 和 componentWillUnmount 思维模式，但我们有更好的方式来避免过于频繁的重复调用 effect。除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得额外操作很方便。

## 4.需要清除的 Effect

## 5. 小结
用户解决代码重复代码分散的问题，useEffect 可以更好的组织代码。
* useEffect api 的用法，第一个参数为匿名函数，作为 effect 要执行的内容。第二个参数为数组，用于观察改变的 props 或 state 进行有条件的触发 effect，或者传入空数组，让 effect 只执行一次。useEffect 返回一个匿名函数，在组件销毁是执行，可以有效避免内存泄露的风险。


