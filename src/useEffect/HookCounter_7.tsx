import React, { useState, useEffect } from 'react';

function RunEffectsOnlyOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePos = (e: MouseEvent) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  //useEffect 方法的第二个参数传入一个空数组，有效的避免了多次调用的问题
  useEffect(() => {
    console.log('addEventListener');
    document.addEventListener('mousemove', logMousePos);
    // 没有正确卸载子组件导致的。mousemove 事件依然被监听着和执行。并且可能会导致内存泄露。
    return () => {
      document.removeEventListener('mousemove', logMousePos)
    }
  }, []);

  return (
    <div>
      Y - {y}, X - {x}
    </div>
  );
}

export default RunEffectsOnlyOnce;
