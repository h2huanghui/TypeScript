## 使用 React.memo 优化

- 如果函数组件在给定相同 props 的情况下渲染相同的结果，通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能优化。在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果

- React.memo 仅检查 props 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍然会重新渲染

- 默认情况下其只会对复杂对象做浅层对比，如果想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现

## useCallback

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

```

- 返回一个 memoized 回调函数。
- 把内联函数及依赖项数组作为参数传入 useCallback,它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
