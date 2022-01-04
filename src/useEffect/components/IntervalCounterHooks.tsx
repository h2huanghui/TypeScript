import React, { useState, useEffect } from 'react';

function IntervalCouterHooks() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1);
    //解法二
    // setCount((preValue) => preValue + 1);
  };

  //hook 只在组件挂载时运行一次，并非重新渲染时
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
}

//[count] 作为依赖列表就能修复这个 Bug，
//但会导致每次改变发生时定时器都被重置。事实上，每个 setInterval 在被清除前（类似于 setTimeout）都会调用一次。但这并不是我们想要的。

export default IntervalCouterHooks;
