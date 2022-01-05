import React, { useState, useCallback } from 'react';

import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponenet() {
  const [age, setAge] = useState(29);
  const [salary, setSalary] = useState(50000);
  // const incrementAge = () => {
  //   setAge(age + 1);
  //   //state变化， ParentComponent进行了rerender.Tile没有传入属性，React.memo判断出不需要rerender
  //   //但是Increment salary按钮上的属性incrementSalary方法，实际上被重新创建了，导致了这个Button传入的props发生了变化，因此React.memo没有组织rerender
  // };

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count text='Salary' count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  );
}

export default ParentComponenet;
