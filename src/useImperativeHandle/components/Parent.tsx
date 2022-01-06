import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import Child from './Child';

interface IRef {
  emptyField(): void;
}

export default function Parent() {
  const [name, SetName] = useState('');
  const childRef = useRef<IRef>(null);

  const handleChange = (val: string) => {
    SetName(val);
  };

  const handleSend = () => {
    console.log(`your name: ${name} will be sent`);

    // fakePost(someUrl, name)
    SetName('');

    // empty Child's input field
    childRef.current?.emptyField();
  };
  return (
    <div className='App'>
      <Child onChange={handleChange} ref={childRef}>
        <span>Please Enter your name</span>
      </Child>
      &nbsp;&nbsp;
      <button onClick={handleSend}>send</button>
    </div>
  );
}
