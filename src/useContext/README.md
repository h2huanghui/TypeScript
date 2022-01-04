## 1. 什么是 Context Api

如果组件树结构如下，现在想从根节点传递一个 userName 的属性到叶子节点 A D F，通过 props 的方式传递，会不可避免的传递通过 B C E，即使这些组件也没有使用这个 userName 属性。

![avatar](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/11/17202eed8258da00~tplv-t2oaga2asx-watermark.awebp)

如果这样的嵌套树形结构有 5 层或 10 层，那么将是灾难式的开发维护体验。如果能不经过中间的节点直接到达需要的地方就可以避免这种问题，这时 Context api 就是来解决这个问题的。Context api 是在组件树中传递数据但不用每层都经过的一种 api。

## 2. 使用 Context

### 2.1 多个 Context 情况

美观性和可读性都不太好，如果使用多个 Context，有个更好的方法，就是使用 Context hook 来解决消费多个 Context 的代码优雅问题

## 3.useContext

```
const value = useContext(MyContext)

```

- useContext 方法接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。

- 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。

- useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context。
