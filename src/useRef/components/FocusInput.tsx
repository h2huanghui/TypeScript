import React, { useEffect, useRef } from 'react';

function FocusInput() {
  //声明泛型
  const inputRef = useRef<HTMLInputElement>(null); //返回一个可变的ref对象
  useEffect(() => {
    //使用时需要判空
    //返回的 ref 对象在组件的整个生命周期内保持不变。
    inputRef.current && inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  );
}

export default FocusInput;
