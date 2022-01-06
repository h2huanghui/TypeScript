## useImperativeHandle

- 可以让你在使用 ref 时 自定义暴露给父组件的实例值。
  ref 在 React 中实际上是一个可变对象（ref.current），他除了可以传递给原生的 HTML 标签以访问 DOM，还可以搭配 forwardRef 传递给子组件，子组件转发 ref 到其内部的 HTML 标签，从而将 DOM 对象赋值给 ref.current.
  -ref.current 可以不仅仅被赋值为一个 DOM 对象，还可以是一个普通（字面量）对象，对象里的方法，可以访问子组件的任意变量（上下文）
