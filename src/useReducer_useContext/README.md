## 1. useReducer 进行状态管理,某些场景想再组件之间分享 state,进行全局的 state 管理

有 3 个子组件 A, B, C，要在子组件内控制同一个计数器，常规的写法是将 counter 的方法写到父组件上，然后通过 props 的方式将 counter 方法和 state 传给子组件，子组件中调用通过 props 传入的 counter 方法，就会改变父组件中的 state，同时也能改变作为 props 传递给子组件的 app 中的 state。

![avatar](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/13/1720cfa8c5efb591~tplv-t2oaga2asx-watermark.awebp)

但是如果组件嵌套比较深的时候，这将非常糟糕，要一层一层将 counter 方法作为 props 传递给子组件。这时就要使用 useContext 加 useReducer 了

![avatar](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/13/1720cfa8c674a7b3~tplv-t2oaga2asx-watermark.awebp)

### 1.1 小结

- 1.在 App.tsx 中，我们使用 useReducer 创建了一个 counter，声明了初始值，创建了 reducer 函数，useReducer 返回了状态 count 和 dispatch 方法。
- 2.为了能让其他组件访问到 count 和 dispatch，我们通过 React.createContext 创建了 CountContext，并用 <CountContext.Provider> 包裹根节点。将 count 和 dispatch 作为 value 传给 Provider。
- 3.在子节点中，我们使用 useContext 获取到 count 和 dispatch 方法，通过调用 dispatch 实现对 count 的改变。
